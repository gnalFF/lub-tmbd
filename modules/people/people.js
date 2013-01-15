angular.module('lub-tmdb-api-people', ['lub-tmdb-http'])
    .factory('lubTmdbApiPeople', function (lubTmdbHTTP,lubTmdbBaseURL) {
        return {
            person: function(personId,options,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"person/"+personId,options,doCache);
            },
            credits: function(personId,options,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"person/"+personId+"/credits",options,doCache);
            },
            images: function(personId,options,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"person/"+personId+"/images",options,doCache);
            },
            changes: function(personId,options,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"person/"+personId+"/changes",options,doCache);
            },
            latest: function(options,doCache){
                return lubTmdbHTTP(lubTmdbBaseURL+"person/latest",options,doCache);
            }
        };
    });