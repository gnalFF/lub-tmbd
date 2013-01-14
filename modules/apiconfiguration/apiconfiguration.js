/**
 * Module dealing with configuration
 * http://docs.themoviedb.apiary.io/#configuration
 */
angular.module('lub-tmdb-api-configuration', ['lub-tmdb-config'])
    .factory('lubTmdbApiConfiguration', function (lubTmdbBaseURL, lubTmdbApiKey, $http, $q) {
        var configuration;
        var get = function () {
            var defer = $q.defer();
            if (configuration) {
                defer.resolve(configuration);
                return defer.promise;
            }
            $http.jsonp(lubTmdbBaseURL + 'configuration', {
                params:{
                    api_key:lubTmdbApiKey,
                    callback:'JSON_CALLBACK'
                }
            })
                .success(function (data) {
                    configuration = data;
                    defer.resolve(configuration);
                })
                .error(function (data) {
                    defer.reject(data);
                });
            return defer.promise;
        };
        return {
            get:get,
            refresh:function () {
                configuration = null;
                return get();
            }
        };
    });
