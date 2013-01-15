(function () {
    'use strict';

    describe('apiConfiguration', function () {
        beforeEach(module('lub-tmdb-api-configuration'));
        it('should make a successfull jsonp request and return a promise', inject(function (lubTmdbBaseURL, lubTmdbApiConfiguration, lubTmdbApiKey, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL + "configuration?api_key=" + lubTmdbApiKey + '&callback=JSON_CALLBACK').respond(200, {test:1});
            var success;
            lubTmdbApiConfiguration.get()
                .then(function (data) {
                    success = data.data;
                });
            $httpBackend.flush();
            expect(success.test).toBe(1);
        }));
        it('should make a not success jsonp request and return a promise', inject(function (lubTmdbBaseURL, lubTmdbApiConfiguration, lubTmdbApiKey, $httpBackend) {

            $httpBackend.expectJSONP(lubTmdbBaseURL + "configuration?api_key=" + lubTmdbApiKey + '&callback=JSON_CALLBACK').respond(500, '');
            var success;
            lubTmdbApiConfiguration.get()
                .then(function () {
                }, function (data) {
                    success = data.data;
                });
            $httpBackend.flush();
            expect(success).toBe('');
            $httpBackend.expectJSONP(lubTmdbBaseURL + "configuration?api_key=" + lubTmdbApiKey + '&callback=JSON_CALLBACK').respond(200, {test:1});
            lubTmdbApiConfiguration.get().then(function (data) {
                success = data.data;
            });
            $httpBackend.flush();
            expect(success.test).toBe(1);
        }));
    });
})();