angular.module('lub-tmdb-api-company', ['lub-tmdb-config','lub-tmdb-http'])
    .factory('lubTmdbApiCompany', function (lubTmdbBaseURL,lubTmdbHTTP) {
        return {
            company: function(companyId,params,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"company/"+companyId);
            },
            movies: function(companyId,params,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"company/"+companyId+"/movies");
            }
        };
    });