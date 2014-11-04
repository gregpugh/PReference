
(function () {

    function ArticleController($scope, $routeParams, articlesFactory) {
        var articleId = $routeParams.articleId;
        $scope.article = null;

        function init() {
            articlesFactory.getArticle(articleId)
                .success(function (article) {
                    $scope.article = article;
                })
                .error(function (data, status, header, config) {
                    //handle error
                });
        }

        init();

    } //eo ArticleController

    ArticleController.$inject = ['$scope', '$routeParams', 'articlesFactory'];  //for script minification

    angular.module('prefApp')
        .controller('ArticleController', ArticleController);

}());
