(function () {

    var app = angular.module('prefApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

    app.config(function ($routeProvider) {
       $routeProvider
            .when('/', {
                controller: 'ArticlesController',
                templateUrl: 'app/views/allarticles.html'
            })
            .when('/articles/:articleId', {
                controller: 'ArticleController',
                templateUrl: 'app/views/article.html'
            })
            .when('/resources/:articleId', {
                controller: 'ResourcesController',
                templateUrl: 'app/views/resources.html'
            })
            .when('/resources', {
                controller: 'AllResourcesController',
                templateUrl: 'app/views/allresources.html'
            })

            .otherwise({ redirectTo: '/' });
   });

    app.directive('myTabs', function () {
         return {
             restrict: 'E',
             transclude: true,
             scope: {},
             controller: function ($scope) {
                 var panes = $scope.panes = [];

                 $scope.select = function (pane) {
                     angular.forEach(panes, function (pane) {
                         pane.selected = false;
                     });
                     pane.selected = true;
                 };

                 this.addPane = function (pane) {
                     if (panes.length === 0) {
                         $scope.select(pane);
                     }
                     panes.push(pane);
                 };
             },
             templateUrl: 'app/views/my-tabs.html'
         };
     })

    app.directive('myPane', function () {
         return {
             require: '^myTabs',
             restrict: 'E',
             transclude: true,
             scope: {
                 title: '@'
             },
             link: function (scope, element, attrs, tabsCtrl) {
                 tabsCtrl.addPane(scope);
             },
             templateUrl: 'app/views/my-pane.html'
         };
     });

}());
