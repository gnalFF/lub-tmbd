/**
 * Module dealing with search related stuff.
 * http://docs.themoviedb.apiary.io/#search
 */
angular.module('lub-tmdb-api-search', ['lub-tmdb-config','lub-tmdb-http'])
    .factory('lubTmdbApiSearch', function (lubTmdbBaseURL,lubTmdbHTTP) {
        var get = function (query, type, options,doCache) {
            options = options || {};
            options.query = query;
            var url = lubTmdbBaseURL+ 'search/' + type;
            return lubTmdbHTTP(url,options,doCache);
        };
        return {
            movie:function (query, options) {
                return get(query, 'movie', options);
            },
            collection:function (query, options) {
                return get(query, 'collection', options);
            },
            person:function (query, options) {
                return get(query, 'person', options);
            },
            list:function (query, options) {
                return get(query, 'list', options);
            },
            company:function (query, options) {
                return get(query, 'company', options);
            },
            keyword:function (query, options) {
                return get(query, 'keyword', options);
            }
        };
    });