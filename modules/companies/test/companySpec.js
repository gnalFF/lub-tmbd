(function(){
    describe('company',function(){
       beforeEach(module('lub-tmdb-api-company'));
        it('should make a jsonp request to get companies by id',inject(function(lubTmdbBaseURL,$httpBackend,lubTmdbApiCompany){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"company/3?api_key=&callback=JSON_CALLBACK").respond("hello");
            var result;
            lubTmdbApiCompany.company({
                query: 3
            }).then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe("hello");
        }));
        it('should make a jsonp request to get movies of companies',inject(function(lubTmdbBaseURL,$httpBackend,lubTmdbApiCompany){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"company/3/movies?api_key=&callback=JSON_CALLBACK").respond("hello");
            var result;
            lubTmdbApiCompany.movies({
                query: 3
            }).then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe("hello");
        }));
    });
})();