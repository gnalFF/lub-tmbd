(function () {
    'use strict';

    describe('config', function () {
        beforeEach(module('lub-tmdb-config'));
        it('should be initialised', inject(function (lubTmdbConfig) {
            expect(lubTmdbConfig.baseURL).toBe('http://api.themoviedb.org/3/');
        }));
    });
})();