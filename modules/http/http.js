/**
 * Created with JetBrains WebStorm.
 * User: gnalFF
 * Date: 14.01.13
 * Time: 15:10
 * To change this template use File | Settings | File Templates.
 */
angular.module('lub-tmdb-http', ['lub-tmdb-config'])
    .factory('lubTmdbHTTP', function ($http, $q, lubTmdbApiKey) {
        return function (url, options, doCache) {
            var opts = options || {};
            var defer = $q.defer();
            $http.jsonp(url, {
                params:angular.extend({
                    api_key:lubTmdbApiKey,
                    callback:'JSON_CALLBACK'
                }, options),
                cache:doCache
            })
                .success(function (data, status, headers, config) {
                    defer.resolve(data);
                }).error(function (data) {
                    defer.reject(data);
                });
            return defer.promise;
        };
    });