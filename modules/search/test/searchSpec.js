(function () {
    'use strict';

    describe('search', function () {
        beforeEach(module('lub-tmdb-api-search'));

        it('should search a movie via jsonp', inject(function (lubTmdbBaseURL, lubTmdbApiKey, lubTmdbApiSearch, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL + "search/movie?api_key=" + lubTmdbApiKey + '&callback=JSON_CALLBACK&query=Terminator').respond(200, {results:1});

            var success;
            lubTmdbApiSearch.movie({
                query: 'Terminator'
            }).then(function (result) {
                success = result.data;
            });
            $httpBackend.flush();

            expect(success.results).toBe(1);
        }));
        it('should append parameters if there are some', inject(function (lubTmdbBaseURL, lubTmdbApiKey, lubTmdbApiSearch, $httpBackend) {

            $httpBackend.expectJSONP(/.*search\/movie.*/).respond(200, {results:1});

            var success;
            lubTmdbApiSearch.movie({
                query: 'Terminator',
                params: {
                    page: 2
                }
            }).then(function (result) {
                    success = result;
                });
            $httpBackend.flush();

            expect(success.data.results).toBe(1);
            expect(success.config.params.page).toBe(2);
        }));
        it('should search a collection via jsonp', inject(function (lubTmdbBaseURL, lubTmdbApiKey, lubTmdbApiSearch, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL+ "search/collection?api_key=" + lubTmdbApiKey + '&callback=JSON_CALLBACK&query=Terminator').respond(200, {results:1});

            var success;
            lubTmdbApiSearch.collection({
                query: 'Terminator'
            }).then(function (result) {
                success = result.data;
            });
            $httpBackend.flush();

            expect(success.results).toBe(1);
        }));
        it('should search a list via jsonp', inject(function (lubTmdbBaseURL, lubTmdbApiKey, lubTmdbApiSearch, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL+ "search/list?api_key=" + lubTmdbApiKey + '&callback=JSON_CALLBACK&query=Terminator').respond(200, {results:1});

            var success;
            lubTmdbApiSearch.list({
                query: 'Terminator'
            }).then(function (result) {
                success = result.data;
            });
            $httpBackend.flush();

            expect(success.results).toBe(1);
        }));
        it('should search multi via jsonp', inject(function (lubTmdbBaseURL, lubTmdbApiKey, lubTmdbApiSearch, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL+ "search/multi?api_key=" + lubTmdbApiKey + '&callback=JSON_CALLBACK&query=Terminator').respond(200, {results:1});

            var success;
            lubTmdbApiSearch.multi({
                query: 'Terminator'
            }).then(function (result) {
                success = result.data;
            });
            $httpBackend.flush();

            expect(success.results).toBe(1);
        }));
    });
})();