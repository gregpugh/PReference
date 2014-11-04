angular.module('prefApp').value('appSettings', {
    title: 'PReference Application'
});

// constant() is available in the config()
// value() is not

angular.module('prefApp').constant('appSettings', {
    title: 'PReference Application',
    version: '1.0'
});
