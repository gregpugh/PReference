(function () {

    var AllResourcesController = function ($scope, articlesFactory) {
        $scope.resources = null;

        function init() {
            articlesFactory.getResources()
                .success(function (resources) {
                    $scope.resources = resources;
                })
                .error(function (data, status, header, config) {
                    // handle errors
                });
        }

        init();

    }; //eo AllResourcesController

    AllResourcesController.$inject = ['$scope', 'articlesFactory'];

    angular.module('prefApp')
        .controller('AllResourcesController', AllResourcesController);

}());