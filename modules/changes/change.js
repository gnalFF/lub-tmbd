angular.module('lub-tmdb-api-change', ['lub-tmdb-http','lub-tmdb-config'])
    .factory('lubTmdbApiChange', function (lubTmdbHTTP,lubTmdbBaseURL) {
        return {
            movie: function(params,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"movie/changes");
            },
            person: function(params,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"person/changes");
            }
        };
    });