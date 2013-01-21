(function () {
    describe('genre', function () {
        beforeEach(module('lub-tmdb-api-genre'));
        it('should make a jsonp request to get genres', inject(function (lubTmdbBaseURL, $httpBackend, lubTmdbApiGenre) {
            $httpBackend.expectJSONP(lubTmdbBaseURL + "genre/list?api_key=&callback=JSON_CALLBACK").respond("hello");
            var result;
            lubTmdbApiGenre.list().then(function (res) {
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe("hello");
        }));
        it('should make a jsonp request to get movies with genre', inject(function (lubTmdbBaseURL, $httpBackend, lubTmdbApiGenre) {
            $httpBackend.expectJSONP(lubTmdbBaseURL + "genre/3/movies?api_key=&callback=JSON_CALLBACK").respond("hello");
            var result;
            lubTmdbApiGenre.movies({
                query: 3
            }).then(function (res) {
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe("hello");
        }));
    });
})();