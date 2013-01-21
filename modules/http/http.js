angular.module('lub-tmdb-http', ['lub-tmdb-config'])
    .factory('lubTmdbHTTP', function ($http, $q, lubTmdbApiKey, lubTmdbBaseURL) {
        return function (options) {
            var url = lubTmdbBaseURL + options.url;
            var params = angular.extend({}, options.params, {
                api_key: lubTmdbApiKey,
                callback: 'JSON_CALLBACK'
            });
            return $http.jsonp(url, {
                params:params,
                cache:angular.isDefined(options.cache) ? options.cache : true
            });
        };
    });