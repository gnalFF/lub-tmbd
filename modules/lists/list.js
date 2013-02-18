angular.module('lub-tmdb-api-list', ['lub-tmdb-http'])
    .factory('lubTmdbApiList', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        list:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"list/" + options.query
            }));
        }
    };
}]);