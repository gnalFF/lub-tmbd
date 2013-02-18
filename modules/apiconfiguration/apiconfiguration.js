/**
 * Module dealing with configuration
 * http://docs.themoviedb.apiary.io/#configuration
 */
angular.module('lub-tmdb-api-configuration', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiConfiguration', ["lubTmdbHTTP",function (lubTmdbHTTP) {
        return {
            get:function (options) {
                return lubTmdbHTTP(angular.extend({}, options, {
                    url:'configuration'
                }));
            }
        };
    }]);
