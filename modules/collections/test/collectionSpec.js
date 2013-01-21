(function(){
    'use strict';
    describe('collection',function(){
        beforeEach(module('lub-tmdb-api-collection'));
        it('should make a jsonp request to get a collection by id',inject(function(lubTmdbApiCollection,$httpBackend,lubTmdbBaseURL){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"collection/3?api_key=&callback=JSON_CALLBACK").respond(200,'yehaa');
            var result;
            lubTmdbApiCollection.collection({
                query: 3
            }).then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe('yehaa');
        }));
        it('should make a jsonp request to get images for a collection',inject(function(lubTmdbApiCollection,$httpBackend,lubTmdbBaseURL){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"collection/3/images?api_key=&callback=JSON_CALLBACK").respond(200,'yehaa');
            var result;
            lubTmdbApiCollection.images({
                query: 3
            }).then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe('yehaa');
        }));
    });
})();
