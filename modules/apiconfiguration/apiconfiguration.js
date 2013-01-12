angular.module('lub-tmdb-api-configuration', ['lub-tmdb-config', 'lub-tmdb-apiKey'])
    .factory('lubTmdbApiConfiguration', function (lubTmdbConfig, lubTmdbApiKey, $http, $q) {
        var configuration;
        var get = function () {
            var defer = $q.defer();
            if(configuration){
                defer.resolve(configuration);
                return defer.promise;
            }
            $http.jsonp(lubTmdbConfig.baseURL + 'configuration?api_key='+lubTmdbApiKey)
                .success(function (data) {
                    configuration = data;
                    defer.resolve(configuration);
                })
                .error(function (data) {
                    defer.reject(data);
                });
            return defer.promise;
        }
        return {
            get: get,
            refresh: function(){
                configuration = null;
                return get();
            }
        }
    });
