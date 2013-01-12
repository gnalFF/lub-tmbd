/**
 * Created with JetBrains WebStorm.
 * User: gnalFF
 * Date: 11.01.13
 * Time: 09:26
 * To change this template use File | Settings | File Templates.
 */
'use strict';

describe('apiConfiguration', function () {
    beforeEach(module('lub-tmdb-api-configuration'));
    it('should make a successfull jsonp request and return a promise', inject(function (lubTmdbConfig, lubTmdbApiConfiguration, lubTmdbApiKey, $httpBackend) {

        $httpBackend.expectJSONP(lubTmdbConfig.baseURL + "configuration?api_key=" + lubTmdbApiKey).respond(200, {test:1});
        var success;
        lubTmdbApiConfiguration.get()
            .then(function (data) {
                success = data;
            });
        $httpBackend.flush();
        expect(success.test).toBe(1);
        lubTmdbApiConfiguration.get().then(function(data){
            success = data;
        });
        expect(success.test).toBe(1);
    }));
    it('should make a not success jsonp request and return a promise', inject(function (lubTmdbConfig, lubTmdbApiConfiguration, lubTmdbApiKey, $httpBackend) {

        $httpBackend.expectJSONP(lubTmdbConfig.baseURL + "configuration?api_key=" + lubTmdbApiKey).respond(500, '');
        var success;
        lubTmdbApiConfiguration.get()
            .then(function () {
            }, function (data) {
                success = data;
            });
        $httpBackend.flush();
        expect(success).toBe('');
        $httpBackend.expectJSONP(lubTmdbConfig.baseURL + "configuration?api_key=" + lubTmdbApiKey).respond(200, {test:1});
        lubTmdbApiConfiguration.get().then(function(data){
            success = data
        });
        $httpBackend.flush();
        expect(success.test).toBe(1);
    }));
})