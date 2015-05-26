(function () {
    'use strict';


    describe('tv', function () {
        beforeEach(module("lub-tmdb-api-tv"));
        it('should make a jsonp request with id to get a tv', inject(function (lubTmdbApiTv, lubTmdbBaseURL, lubTmdbApiKey, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL+ "tv/4607?api_key=" + lubTmdbApiKey+'&callback=JSON_CALLBACK').respond(200, {daTv:1});
            var success;
            lubTmdbApiMovie.movie({
                query: 4607
            }).then(function (tv,status,header,config) {
                success = tv.data;
            });
            $httpBackend.flush();
            expect(success.daTv).toBe(1);
        }));
        it('should make a jsonp request with id to get tv alternative titles', inject(function (lubTmdbApiTv, lubTmdbBaseURL, lubTmdbApiKey, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL + "tv/4607/alternative_titles?api_key=" + lubTmdbApiKey+'&callback=JSON_CALLBACK').respond(200, {daTv:1});
            var success;
            lubTmdbApiTv.alternativeTitles({
                query: 4607
            }).then(function (tv) {
                success = tv.data;
            });
            $httpBackend.flush();
            expect(success.daTv).toBe(1);
        }));
        it('should make a jsonp request to get on the air tvs', inject(function (lubTmdbApiTv, lubTmdbBaseURL, lubTmdbApiKey, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL + "tv/on_the_air?api_key=" + lubTmdbApiKey+'&callback=JSON_CALLBACK').respond(200, {daTv:1});
            var success;
            lubTmdbApiMovie.popular().then(function (tv) {
                    success = tv.data;
                });
            $httpBackend.flush();
            expect(success.daTv).toBe(1);
        }));
    });
})();