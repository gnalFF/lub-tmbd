/**
 * Module dealing with search related stuff.
 * http://docs.themoviedb.apiary.io/#search
 */
angular.module('lub-tmdb-api-search', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiSearch', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    var get = function (type, options) {
        var opts = angular.extend({}, {
            params:{}
        }, options);
        opts.params.query = opts.query;
        return lubTmdbHTTP(angular.extend({}, opts, {
            url:'search/' + type
        }));
    };
    return {
        movie:function (options) {
            return get('movie', options);
        },
        collection:function (options) {
            return get('collection', options);
        },
        person:function (options) {
            return get('person', options);
        },
        list:function (options) {
            return get('list', options);
        },
        company:function (options) {
            return get('company', options);
        },
        keyword:function (options) {
            return get('keyword', options);
        },
        multi:function (options) {
            return get('multi', options);
        }
    };
}]);
