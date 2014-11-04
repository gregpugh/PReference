(function () {

    var articlesFactory = function ($http) {

        ////json data
        //var customers = [{ id: 1, name: 'Dave', city: 'Dallas', orderTotal: '123.11', joined: '2000-11-12', orders: [{ id: 2, product: 'Baseball', total: 9.995 }, { id: 2, product: 'Bat', total: 15.995 }] },
        //                    { id: 2, name: 'Doug', city: 'Durham', orderTotal: '222.509', joined: '2010-06-05', orders: [{ id: 1, product: 'Cricket', total: 9.995 }, { id: 2, product: 'Bat', total: 18.995 }] },
        //                    { id: 3, name: 'Rollie', city: 'Raleigh', orderTotal: '333.33', joined: '1920-04-02', orders: [{ id: 1, product: 'Football', total: 9.995 }, { id: 2, product: 'Helmet', total: 25.995 }] },
        //                    { id: 4, name: 'Greg', city: 'Greenville', orderTotal: '44.44', joined: '1952-06-23', orders: [{ id: 1, product: 'Soccer Ball', total: 9.995 }, { id: 2, product: 'Shin Guard', total: 5.995 }] }
        //];

        var factory = {};

        //articles
        factory.getArticles = function () {
            // just return the promise, let controller handle errors and process data
            return $http.get('/articles');
        };

        factory.getArticle = function (articleId) {
            // search for the article with this articleId
            return $http.get('/articles/' + articleId);
        }

        factory.deleteArticle = function (articleId) {
            return $http.delete('/articles/' + articleId);
        }

        //resources
       factory.getResources = function () {
            return $http.get('/resources');
        }


        return factory;
    };

    articlesFactory.$inject = ['$http'];

    angular.module('prefApp').factory('articlesFactory', articlesFactory);
}());