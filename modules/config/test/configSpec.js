/**
 * Created with JetBrains WebStorm.
 * User: gnalFF
 * Date: 11.01.13
 * Time: 09:26
 * To change this template use File | Settings | File Templates.
 */
'use strict';

describe('config',function(){
    beforeEach(module('lub-tmdb-config'));
    it('should be initialised', inject(function(lubTmdbConfig){
        expect(lubTmdbConfig.baseURL).toBe('http://api.themoviedb.org/3/');
    }));
})