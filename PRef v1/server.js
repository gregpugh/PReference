var express = require('express'),
    app = express();

//app.configure(function () {
    app.use(express.static(__dirname, '/'));
//});

    app.get('/articles/:id', function (req, res) {
        var articleId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len = articles.length; i < len; i++) {
        if (articles[i].id === articleId) {
            data = articles[i];
            break;
        }
    }
    res.json(data);
});

app.get('/articles', function (req, res) {
    res.json(articles);
    //res.json(500, { error: 'An error has occurred!' });
});


app.get('/resources', function (req, res) {
    var resources = [];
    for (var i = 0, len = articles.length; i < len; i++) {
        if (articles[i].resources) {
            for (var j = 0, resourcesLen = articles[i].resources.length; j < resourcesLen; j++) {
                resources.push(articles[i].resources[j]);
            }
        }
    }
    res.json(resources);
});

app.delete('/articles/:id', function (req, res) {
    var articleId = parseInt(req.params.id);
    var data = { status: true };
    for (var i = 0, len = articles.length; i < len; i++) {
        if (articles[i].id === articleId) {
            articles.splice(i, 1);
            data = { status: true };
            break;
        }
    }
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080')


//json data
var articles = [   {
                        id: 1, title: 'Angular PReference', summary: 'A Personalized Reference app that also provides a sample of AngularJS parts and pieces in play',
                        content: 'The content goes here...',
                        created: '2000-11-12',
                        resources: [{ id: 1, title: '60ish Minutes', author: 'Dan Wahlin', url: 'http:www.blahblah.com', type: 'video', summary: 'The summary goes here...'  },
                                    { id: 2, title: 'Angular', author: 'Lukas Ruebbelke', url: 'https://egghead.io/series/angularjs-app-from-scratch-getting-started', type: 'blog', summary: 'The summary goes here...' }],
                        comments: [
                            { id: 1, articleId: 1, title: 'Module', content: 'The content goes here...', created: '2000-11-12' },
                            { id: 2, articleId: 1, title: 'Config', content: 'The content goes here...', created: '2000-11-12' },
                            { id: 3, articleId: 1, title: 'Routes', content: 'The content goes here...', created: '2000-11-12' },
                            { id: 4, articleId: 1, title: 'Services and Factories', content: 'The content goes here...', created: '2000-11-12' },
                            { id: 5, articleId: 1, title: 'Web Api - Node.js', content: 'The content goes here...', created: '2000-11-12' },
                            { id: 6, articleId: 1, title: 'Web Api - ASP.NET ', content: 'The content goes here...', created: '2000-11-12' },
                            { id: 7, articleId: 1, title: 'Views', content: 'The content goes here...', created: '2000-11-12' },
                            { id: 8, articleId: 1, title: 'Directives', content: 'The content goes here...', created: '2000-11-12' },
                            { id: 9, articleId: 1, title: 'Scope', content: 'The content goes here...', created: '2000-11-12' },
                            { id: 10, articleId: 1, title: 'Controllers', content: 'The content goes here...', created: '2000-11-12' },
                            { id: 11, articleId: 1, title: 'angular-animate', content: 'The content goes here...', created: '2000-11-12' },
                            { id: 12, articleId: 1, title: 'Visualize the Framework', content: 'Treeview <br/> Flat view', created: '2000-11-12' },
                        ]
                    },
                    {
                        id: 2, title: 'Repository Pattern', summary: 'Begin withh EF on one end and carefully layer up to a service layer accessed by MVC controllers and WebApi controllers',
                        content: 'The content goes here...',
                        created: '2010-06-05',
                        resources: [{ id: 3, title: 'Repository Pattern', author: 'Rob', url: 'http:www.blahblah.com', type: 'website', summary: 'The summary goes here...' },
                                    { id: 2, title: 'EF', author: 'Scott', url: 'http:www.blahblah.com', type: 'video', summary: 'The summary goes here...' },
                                    { id: 23, title: 'Ninject', author: 'Nancy', url: 'http:www.blahblah.com', type: 'website', summary: 'The summary goes here...' }],
                        comments: [
                                    { id: 13, articleId: 2, title: 'Repository', content: 'The content goes here...', created: '2000-11-12' },
                                    { id: 14, articleId: 2, title: 'EF', content: 'The content goes here...', created: '2000-11-12' },
                                    { id: 15, articleId: 2, title: 'Ninject', content: 'The content goes here...', created: '2000-11-12' },
                                    { id: 16, articleId: 2, title: 'WebApi', content: 'The content goes here...', created: '2000-11-12' },
                        ]

                    },
                    {
                        id: 3, title: 'Looping Video Player', summary: 'Ever tried to learn a song or a lick from a YouTube video? This utility lets you loop a section of a video and precisely tweek the start and end times. Demos many HTML5 controls.',
                        content: 'The content goes here...',
                        created: '1920-04-02',
                        resources: [{ id: 4, title: 'HTML5', author: 'Dan', url: 'http:www.blahblah.com', type: 'blog', summary: 'The summary goes here...' },
                                    { id: 5, title: 'HTML5 Video Control', author: 'Larry', url: 'http:www.blahblah.com', type: 'github', summary: 'The summary goes here...' }],
                        comments: [
                                    { id: 17, articleId: 3, title: 'Code', content: 'The content goes here...', created: '2000-11-12' },
                                    { id: 18, articleId: 3, title: 'HTML5 Control Samples', content: 'The content goes here...', created: '2000-11-12' },
                                    { id: 19, articleId: 3, title: 'Tools to download YouTube videos', content: 'The content goes here...', created: '2000-11-12' },
                        ]
                    },
                    {
                        id: 4, title: 'Intro ASP.NET WebApi Tutorial', summary: 'Explains the basics of setting up and using the ASP.NET WebApi using the Music Album db from the sample app on ASP.NET',
                        content: 'The content goes here...',
                        created: '1952-06-23',
                        resources: [{ id: 6, title: 'ASP.NET WebApi', author: 'Rob', url: 'http:www.blahblah.com', type: 'github', summary: 'The summary goes here...' },
                                    { id: 7, title: 'Node.js and Express', author: 'Steve', url: 'http:www.blahblah.com', type: 'website', summary: 'The summary goes here...' }],
                        comments: [
                                    { id: 20, articleId: 4, title: 'Repository', content: 'The content goes here...', created: '2000-11-12' },
                                    { id: 21, articleId: 5, title: 'WebAPI', content: 'The content goes here...', created: '2000-11-12' },
                                    { id: 22, articleId: 6, title: 'Fiddler', content: 'The content goes here...', created: '2000-11-12' },

                        ]
                    }
];

//var articles = [{
//    id: 1, title: 'Angular PReference', summary: 'A sample of angular parts and peices in play',
//    content: 'The content goes here...',
//    created: '2000-11-12',
//    resources: [{ id: 1, title: 'Baseball', author: 'David', url: 'http:www.blahblah.com', type: 'video' },
//                { id: 2, title: 'Bat', author: 'Dan', url: 'http:www.blahblah.com', type: 'blog' }]
//},
//                    {
//                        id: 2, title: 'Repository Pattern', summary: 'Begin withh EF on one end and carefully layer up to a service layer accessed by MVC controllers and WebApi controllers',
//                        content: 'The content goes here...',
//                        created: '2010-06-05',
//                        resources: [{ id: 1, title: 'Cricket', author: 'Rob', url: 'http:www.blahblah.com', type: 'website' },
//                                    { id: 2, title: 'Bat', author: 'Scott', url: 'http:www.blahblah.com', type: 'video' }]
//                    },
//                    {
//                        id: 3, title: 'Looping Video Player', summary: 'Ever tried to learn a song or a lick from a YouTube video? This utility lets you loop a section of a video and precisely tweek the start and end times. Demos many HTML5 controls.',
//                        content: 'The content goes here...',
//                        created: '1920-04-02',
//                        resources: [{ id: 1, title: 'Football', author: 'Dan', url: 'http:www.blahblah.com', type: 'blog' },
//                                    { id: 2, title: 'Helmet', author: 'Larry', url: 'http:www.blahblah.com', type: 'github' }]
//                    },
//                    {
//                        id: 4, title: 'Intro ASP.NET WebApi Tutorial', summary: 'Explains the basics of setting up and using the ASP.NET WebApi using the Music Album db from the sample app on ASP.NET',
//                        content: 'The content goes here...',
//                        created: '1952-06-23',
//                        resources: [{ id: 1, title: 'Soccer Ball', author: 'Rob', url: 'http:www.blahblah.com', type: 'github' },
//                                    { id: 2, title: 'Shin Guard', author: 'Steve', url: 'http:www.blahblah.com', type: 'website' }]
//                    }
//];






