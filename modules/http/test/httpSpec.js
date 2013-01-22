(function () {
    'use strict';
    describe('http', function () {
        beforeEach(module('lub-tmdb-http'));
        it('should do a jsonp request with apikey and cache set to true by default', inject(function (lubTmdbHTTP, $httpBackend, lubTmdbBaseURL) {
            $httpBackend.expectJSONP(/.*test.*/).respond(200, 'test');
            var result;
            lubTmdbHTTP({
                url:"test"
            }).then(function (data) {
                    result = data;
                });
            $httpBackend.flush();
            expect(result.config.url).toBe(lubTmdbBaseURL + "test");
            expect(result.config.cache).toBe(true);
        }));
        it('should append parameters to the url if there are some', inject(function (lubTmdbHTTP, $httpBackend) {
            $httpBackend.expectJSONP(/.*test.*/).respond(200, 'test');
            var result;
            lubTmdbHTTP({
                url:"test",
                params:{
                    language:"de",
                    append_to_response:"images"
                }
            }).then(function (data) {
                    result = data;
                });
            $httpBackend.flush();
            expect(result.config.params.language).toBe("de");
            expect(result.config.params.append_to_response).toBe("images");
        }));
        it('should not use cache if false', inject(function (lubTmdbHTTP, $httpBackend) {
            $httpBackend.expectJSONP(/.*test.*/).respond(200, 'test');
            var result;
            lubTmdbHTTP({
                url:"test",
                cache:false,
                params:{
                    language:"de",
                    append_to_response:"images"
                }
            }).then(function (data) {
                    result = data;
                });
            $httpBackend.flush();
            expect(result.config.cache).toBe(false);
        }));
        it('should  use specified cache', inject(function (lubTmdbHTTP, $httpBackend, lubTmdbBaseURL) {
            $httpBackend.expectJSONP(/*test.*/).respond(200, 'test');
            var result;
            lubTmdbHTTP({
                url:"test",
                cache:"hurz",
                params:{
                    language:"de",
                    append_to_response:"images"
                }
            }).then(function (data) {
                    result = data;
                });
            $httpBackend.flush();
            expect(result.config.cache).toBe("hurz");
        }));

        describe("in case of get configuration",function(){
            beforeEach(module(function($provide){
                $provide.value('lubTmdbConnectionMethod','get');
            }));

            it('should do a get request when connection method is reconfigured',
                inject(function (lubTmdbHTTP, $httpBackend, lubTmdbBaseURL) {
                    $httpBackend.expectGET(/.*test.*/).respond(200, 'test');
                    var result;
                    lubTmdbHTTP({
                        url:"test"
                    }).then(function (data) {
                            result = data;
                        });
                    $httpBackend.flush();
                    expect(result.config.url).toBe(lubTmdbBaseURL + "test");
                    expect(result.config.cache).toBe(true);
                    expect(result.config.method).toBe("GET");
                })
            );
        });
    });
})();