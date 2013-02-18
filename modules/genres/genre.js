angular.module('lub-tmdb-api-genre', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiGenre', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        list:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"genre/list"
            }));
        },
        movies:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"genre/" + options.query + "/movies"
            }));
        }
    };
}]);