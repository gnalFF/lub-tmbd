/**
 * Created with JetBrains WebStorm.
 * User: gnalFF
 * Date: 15.01.13
 * Time: 10:32
 * To change this template use File | Settings | File Templates.
 */
angular.module('lub-tmdb-api-collection', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiCollection', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        collection:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"collection/" + options.query
            }));
        },
        images:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"collection/" + options.query + "/images"
            }));
        }
    };
}]);