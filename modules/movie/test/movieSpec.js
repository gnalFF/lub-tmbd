(function () {
    'use strict';


    describe('movies', function () {
        beforeEach(module("lub-tmdb-api-movie"));
        it('should make a jsonp request with id to get a movie', inject(function (lubTmdbApiMovie, lubTmdbBaseURL, lubTmdbApiKey, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL+ "movie/3?api_key=" + lubTmdbApiKey+'&callback=JSON_CALLBACK').respond(200, {daMovie:1});
            var success;
            lubTmdbApiMovie.movie({
                query: 3
            }).then(function (movie,status,header,config) {
                success = movie.data;
            });
            $httpBackend.flush();
            expect(success.daMovie).toBe(1);
        }));
        it('should make a jsonp request with id to get alternative titles', inject(function (lubTmdbApiMovie, lubTmdbBaseURL, lubTmdbApiKey, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL + "movie/3/alternative_titles?api_key=" + lubTmdbApiKey+'&callback=JSON_CALLBACK').respond(200, {daMovie:1});
            var success;
            lubTmdbApiMovie.alternativeTitles({
                query: 3
            }).then(function (movie) {
                success = movie.data;
            });
            $httpBackend.flush();
            expect(success.daMovie).toBe(1);
        }));
        it('should make a jsonp request to get upcoming movies', inject(function (lubTmdbApiMovie, lubTmdbBaseURL, lubTmdbApiKey, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL + "movie/popular?api_key=" + lubTmdbApiKey+'&callback=JSON_CALLBACK').respond(200, {daMovie:1});
            var success;
            lubTmdbApiMovie.popular().then(function (movie) {
                    success = movie.data;
                });
            $httpBackend.flush();
            expect(success.daMovie).toBe(1);
        }));
        it('should make a jsonp request to get upcoming movies and ignore the query', inject(function (lubTmdbApiMovie, lubTmdbBaseURL, lubTmdbApiKey, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL + "movie/popular?api_key=" + lubTmdbApiKey+'&callback=JSON_CALLBACK').respond(200, {daMovie:1});
            var success;
            lubTmdbApiMovie.popular({
                query : 3
            }).then(function (movie) {
                    success = movie.data;
                });
            $httpBackend.flush();
            expect(success.daMovie).toBe(1);
        }));
    });
})();