(function(){
    describe('keyword',function(){
        beforeEach(module('lub-tmdb-api-keyword'));
        it('should make a jsonp request to get a keyword by id', inject(function (lubTmdbBaseURL, $httpBackend, lubTmdbApiKeyword) {
            $httpBackend.expectJSONP(lubTmdbBaseURL + "keyword/3?api_key=&callback=JSON_CALLBACK").respond("hello");
            var result;
            lubTmdbApiKeyword.keyword(3).then(function (res) {
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe("hello");
        }));
        it('should make a jsonp request to get movies with keyword', inject(function (lubTmdbBaseURL, $httpBackend, lubTmdbApiKeyword) {
            $httpBackend.expectJSONP(lubTmdbBaseURL + "keyword/3/movies?api_key=&callback=JSON_CALLBACK").respond("hello");
            var result;
            lubTmdbApiKeyword.movies(3).then(function (res) {
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe("hello");
        }));
    });
})();