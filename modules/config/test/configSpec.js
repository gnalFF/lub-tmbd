(function () {
    'use strict';

    describe('config', function () {
        beforeEach(module('lub-tmdb-config'));
        it('should be initialised', inject(function (lubTmdbBaseURL) {
            expect(lubTmdbBaseURL).toBe('http://api.themoviedb.org/3/');
        }));
    });
})();