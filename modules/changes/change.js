angular.module('lub-tmdb-api-change', ['lub-tmdb-http', 'lub-tmdb-config'])
    .factory('lubTmdbApiChange', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        movie:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"movie/changes"
            }));
        },
        person:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"person/changes"
            }));
        }
    };
}]);