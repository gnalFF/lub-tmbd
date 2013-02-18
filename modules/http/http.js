angular.module('lub-tmdb-http', ['lub-tmdb-config'])
    .factory('lubTmdbHTTP', ["$http", "$q", "lubTmdbApiKey", "lubTmdbBaseURL", "lubTmdbConnectionMethod", "lubDefaultCache", function ($http, $q, lubTmdbApiKey, lubTmdbBaseURL, lubTmdbConnectionMethod, lubDefaultCache) {
    return function (options) {
        var url = lubTmdbBaseURL + options.url;
        var params = angular.extend({}, options.params, {
            api_key:lubTmdbApiKey
        });
        if (lubTmdbConnectionMethod === 'jsonp') {
            params.callback = 'JSON_CALLBACK';
        }
        return $http[lubTmdbConnectionMethod](url, {
            params:params,
            cache:angular.isDefined(options.cache) ? options.cache : lubDefaultCache
        });
    };
}]);