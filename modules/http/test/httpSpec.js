(function(){
    'use strict';
    describe('http',function(){
        beforeEach(module('lub-tmdb-http'));
        it('should do a jsonp request with apikey and cache set to true by default',inject(function(lubTmdbHTTP,$httpBackend){
            $httpBackend.expectJSONP('test?api_key=&callback=JSON_CALLBACK').respond(200,'test');
            var result;
            lubTmdbHTTP('test').then(function(data){
                result = data;
            });
            $httpBackend.flush();
            expect(result.config.cache).toBe(true);
        }));
    });
})();