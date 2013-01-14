(function () {
    'use strict';

    describe('search', function () {
        beforeEach(module('lub-tmdb-api-search'));

        it('should search a movie via jsonp', inject(function (lubTmdbBaseURL, lubTmdbApiKey, lubTmdbApiSearch, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL + "search/movie?api_key=" + lubTmdbApiKey + '&callback=JSON_CALLBACK&query=Terminator').respond(200, {results:1});

            var success;
            lubTmdbApiSearch.movie('Terminator').then(function (result) {
                success = result;
            });
            $httpBackend.flush();

            expect(success.results).toBe(1);
        }));
        it('should search a collection via jsonp', inject(function (lubTmdbBaseURL, lubTmdbApiKey, lubTmdbApiSearch, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL+ "search/collection?api_key=" + lubTmdbApiKey + '&callback=JSON_CALLBACK&query=Terminator').respond(200, {results:1});

            var success;
            lubTmdbApiSearch.collection('Terminator').then(function (result) {
                success = result;
            });
            $httpBackend.flush();

            expect(success.results).toBe(1);
        }));
        it('should search a list via jsonp', inject(function (lubTmdbBaseURL, lubTmdbApiKey, lubTmdbApiSearch, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL+ "search/list?api_key=" + lubTmdbApiKey + '&callback=JSON_CALLBACK&query=Terminator').respond(200, {results:1});

            var success;
            lubTmdbApiSearch.list('Terminator').then(function (result) {
                success = result;
            });
            $httpBackend.flush();

            expect(success.results).toBe(1);
        }));
    });
})();