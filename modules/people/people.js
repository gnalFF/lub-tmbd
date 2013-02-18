angular.module('lub-tmdb-api-people', ['lub-tmdb-http'])
    .factory('lubTmdbApiPeople', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        person:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query
            }));
        },
        credits:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/credits"
            }));
        },
        images:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/images"
            }));
        },
        changes:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/changes"
            }));
        },
        latest:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:'person/latest'
            }));
        }
    };
}]);