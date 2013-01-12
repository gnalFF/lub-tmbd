/**
 * Created with JetBrains WebStorm.
 * User: gnalFF
 * Date: 11.01.13
 * Time: 13:09
 * To change this template use File | Settings | File Templates.
 */
'use strict';

describe('movies', function () {
    beforeEach(module("lub-tmdb-api-movie"));
    it('should make a jsonp request with id to get a movie', inject(function (lubTmdbApiMovie,lubTmdbConfig, lubTmdbApiKey, $httpBackend) {

        $httpBackend.expectJSONP(lubTmdbConfig.baseURL + "movie/3?api_key=" + lubTmdbApiKey).respond(200, {daMovie:1});
        var success;
        lubTmdbApiMovie.movie(3).then(function(movie){
           success = movie;
        });
        $httpBackend.flush();
        expect(success.daMovie).toBe(1);

    }));
    it('should make a jsonp request with id to get alternative titles', inject(function (lubTmdbApiMovie,lubTmdbConfig, lubTmdbApiKey, $httpBackend) {

        $httpBackend.expectJSONP(lubTmdbConfig.baseURL + "movie/3/alternative_titles?api_key=" + lubTmdbApiKey).respond(200, {daMovie:1});
        var success;
        lubTmdbApiMovie.alternativeTitles(3).then(function(movie){
            success = movie;
        });
        $httpBackend.flush();
        expect(success.daMovie).toBe(1);
    }));
    it('should make a jsonp request to get upcoming movies', inject(function (lubTmdbApiMovie,lubTmdbConfig, lubTmdbApiKey, $httpBackend) {

        $httpBackend.expectJSONP(lubTmdbConfig.baseURL + "movie/popular?api_key=" + lubTmdbApiKey).respond(200, {daMovie:1});
        var success;
        lubTmdbApiMovie.popular().then(function(movie){
            success = movie;
        });
        $httpBackend.flush();
        expect(success.daMovie).toBe(1);
    }));
})