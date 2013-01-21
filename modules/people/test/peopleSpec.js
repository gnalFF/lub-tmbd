(function(){
    'use strict';
    describe('people',function(){
       beforeEach(module('lub-tmdb-api-people'));
        it('should make a jsonp request to get person by id',inject(function(lubTmdbApiPeople,$httpBackend,lubTmdbBaseURL){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"person/4?api_key=&callback=JSON_CALLBACK").respond(200,'BradPitt');
            var result;
            lubTmdbApiPeople.person({
                query: 4
            }).then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe('BradPitt');
        }));
        it('should make a jsonp request to get person credits by id',inject(function(lubTmdbApiPeople,$httpBackend,lubTmdbBaseURL){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"person/4/credits?api_key=&callback=JSON_CALLBACK").respond(200,'BradPitt');
            var result;
            lubTmdbApiPeople.credits({
                query: 4
            }).then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe('BradPitt');
        }));
        it('should make a jsonp request to get person images by id',inject(function(lubTmdbApiPeople,$httpBackend,lubTmdbBaseURL){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"person/4/images?api_key=&callback=JSON_CALLBACK").respond(200,'BradPitt');
            var result;
            lubTmdbApiPeople.images({
                query: 4
            }).then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe('BradPitt');
        }));
        it('should make a jsonp request to get person changes by id',inject(function(lubTmdbApiPeople,$httpBackend,lubTmdbBaseURL){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"person/4/changes?api_key=&callback=JSON_CALLBACK").respond(200,'BradPitt');
            var result;
            lubTmdbApiPeople.changes({
                query: 4
            }).then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe('BradPitt');
        }));
        it('should make a jsonp request to get latest persons',inject(function(lubTmdbApiPeople,$httpBackend,lubTmdbBaseURL){
            $httpBackend.expectJSONP(lubTmdbBaseURL+"person/latest?api_key=&callback=JSON_CALLBACK").respond(200,'BradPitt');
            var result;
            lubTmdbApiPeople.latest().then(function(res){
                result = res;
            });
            $httpBackend.flush();
            expect(result.data).toBe('BradPitt');
        }));
    });
})();
