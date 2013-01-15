angular.module('lub-tmdb-api-list', ['lub-tmdb-http'])
    .factory('lubTmdbApiList', function (lubTmdbHTTP,lubTmdbBaseURL) {
        return {
            list: function(listId,options,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"list/"+listId,options,doCache);
            }
        };
    });