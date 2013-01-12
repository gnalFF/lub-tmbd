'use strict';

describe('search',function(){
    beforeEach(module('lub-tmdb-api-search'));

    it('should search a movie via jsonp',inject(function(lubTmdbConfig,lubTmdbApiKey,lubTmdbApiSearch,$httpBackend){

        $httpBackend.expectJSONP(lubTmdbConfig.baseURL+"search/movie?api_key="+lubTmdbApiKey+'&query=Terminator').respond(200,{results:1});

        var success;
        lubTmdbApiSearch.movie('Terminator').then(function(result){
            success = result;
        });
        $httpBackend.flush();

        expect(success.results).toBe(1);
    }));
    it('should search a collection via jsonp',inject(function(lubTmdbConfig,lubTmdbApiKey,lubTmdbApiSearch,$httpBackend){

        $httpBackend.expectJSONP(lubTmdbConfig.baseURL+"search/collection?api_key="+lubTmdbApiKey+'&query=Terminator').respond(200,{results:1});

        var success;
        lubTmdbApiSearch.collection('Terminator').then(function(result){
            success = result;
        });
        $httpBackend.flush();

        expect(success.results).toBe(1);
    }));
    it('should search a list via jsonp',inject(function(lubTmdbConfig,lubTmdbApiKey,lubTmdbApiSearch,$httpBackend){

        $httpBackend.expectJSONP(lubTmdbConfig.baseURL+"search/list?api_key="+lubTmdbApiKey+'&query=Terminator').respond(200,{results:1});

        var success;
        lubTmdbApiSearch.list('Terminator').then(function(result){
            success = result;
        });
        $httpBackend.flush();

        expect(success.results).toBe(1);
    }));
})