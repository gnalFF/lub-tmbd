(function(){
    'use strict';
    describe('list',function(){
       beforeEach(module('lub-tmdb-api-list'));
        it('should make a jsonp request to get lists by id',inject(function(lubTmdbApiList,$httpBackend,lubTmdbBaseURL){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"list/3?api_key=&callback=JSON_CALLBACK").respond('list');
            var result;
            lubTmdbApiList.list({
                query: 3
            }).then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe('list');
        }));
    });
})();