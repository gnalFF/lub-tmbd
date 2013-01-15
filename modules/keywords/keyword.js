angular.module('lub-tmdb-api-keyword', ['lub-tmdb-config','lub-tmdb-http'])
    .factory('lubTmdbApiKeyword', function (lubTmdbBaseURL,lubTmdbHTTP) {
        return {
            keyword:function (keywordId, params, doCache) {
                return lubTmdbHTTP(lubTmdbBaseURL+'keyword/'+keywordId,params,doCache);
            },
            movies:function (keywordId, params, doCache) {
                return lubTmdbHTTP(lubTmdbBaseURL+'keyword/'+keywordId+"/movies",params,doCache);
            }
        };
    });