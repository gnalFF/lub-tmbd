angular.module('lub-tmdb-http', ['lub-tmdb-config'])
    .factory('lubTmdbHTTP', function ($http, $q, lubTmdbApiKey) {
        return function (url, options, doCache) {
            var opts = options || {};
            if(angular.isUndefined(doCache)){
                doCache = true;
            }
            return $http.jsonp(url, {
                params:angular.extend({
                    api_key:lubTmdbApiKey,
                    callback:'JSON_CALLBACK'
                }, options),
                cache:doCache
            });
        };
    });