(function(){
    describe('change',function(){
        beforeEach(module('lub-tmdb-api-change'));
        it('should make a jsonp request to get changes for movies',inject(function(lubTmdbBaseURL,$httpBackend,lubTmdbApiChange){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"movie/changes?api_key=&callback=JSON_CALLBACK").respond("hello");
            var result;
            lubTmdbApiChange.movie().then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe("hello");
        }));
        it('should make a jsonp request to get changes for people',inject(function(lubTmdbBaseURL,$httpBackend,lubTmdbApiChange){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"person/changes?api_key=&callback=JSON_CALLBACK").respond("hurz");
            var result;
            lubTmdbApiChange.person().then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe("hurz");
        }));
    });
})();