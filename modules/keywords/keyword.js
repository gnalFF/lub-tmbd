angular.module('lub-tmdb-api-keyword', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiKeyword', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        keyword:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"keyword/" + options.query
            }));
        },
        movies:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"keyword/" + options.query + "/movies"
            }));
        }
    };
}]);