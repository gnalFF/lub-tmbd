angular.module('lub-tmdb-api-genre', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiGenre', function (lubTmdbBaseURL, lubTmdbHTTP) {
        return {
            list:function (params,doCache) {
                return lubTmdbHTTP(lubTmdbBaseURL + "genre/list",params,doCache);
            },
            movies:function (genreId,params,doCache) {
                return lubTmdbHTTP(lubTmdbBaseURL + "genre/"+genreId+"/movies",params,doCache);
            }
        };
    });