
(function () {

    function ArticlesController($scope, $log, $window, articlesFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.articles = [];
        $scope.appSettings = appSettings;

        function init() {
            articlesFactory.getArticles()
                .success(function (articles) {
                    $scope.articles = articles;
                })
                .error(function (data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }

        init();

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        $scope.deleteArticle = function (articleId) {
            articlesFactory.deleteArticle(articleId)
                .success(function (status) {
                    if (status) {
                        for (var i = 0, len = $scope.articles.length; i < len; i++) {
                            if ($scope.articles[i].id === articleId) {
                                $scope.articles.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else {
                        $window.alert('Unable to delete article');
                    }
                })
                .error(function (data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        };


    }; //eo ArticlesController

    ArticlesController.$inject = ['$scope', '$log', '$window', 'articlesFactory', 'appSettings'];

    angular.module('prefApp')
        .controller('ArticlesController', ArticlesController);

}());
 