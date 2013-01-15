/**
 * Created with JetBrains WebStorm.
 * User: gnalFF
 * Date: 15.01.13
 * Time: 10:32
 * To change this template use File | Settings | File Templates.
 */
angular.module('lub-tmdb-api-collection', ['lub-tmdb-config','lub-tmdb-http'])
    .factory('lubTmdbApiCollection', function (lubTmdbBaseURL,lubTmdbHTTP) {
        return {
            collection: function(collectionId,options,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"collection/"+collectionId,options,doCache);
            },
            images: function(collectionId,options,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"collection/"+collectionId+"/images",options,doCache);
            }
        };
    });