angular.module('lub-tmdb-api-company', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiCompany', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        company:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"company/" + options.query
            }));
        },
        movies:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"company/" + options.query + "/movies"
            }));
        }
    };
}]);