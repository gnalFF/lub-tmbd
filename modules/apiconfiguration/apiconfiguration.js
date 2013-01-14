/**
 * Module dealing with configuration
 * http://docs.themoviedb.apiary.io/#configuration
 */
angular.module('lub-tmdb-api-configuration', ['lub-tmdb-config','lub-tmdb-http'])
    .factory('lubTmdbApiConfiguration', function (lubTmdbBaseURL, lubTmdbHTTP) {
        var configuration;
        var get = function () {
        };
        return {
            get:function () {
                return lubTmdbHTTP(lubTmdbBaseURL + 'configuration',{},true);
            }
        };
    });
