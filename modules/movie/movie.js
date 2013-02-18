/**
 * Module dealing with movie related stuff.
 * http://docs.themoviedb.apiary.io/#movies
 */
angular.module("lub-tmdb-api-movie", ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiMovie', ["$q", "lubTmdbHTTP", function ($q, lubTmdbHTTP) {
    var noQuery = ['latest', 'upcoming', 'now_playing', 'popular', 'top_rated'];
    var get = function (options, type) {
        var opts = options || {};
        var action = type === '' ? '' : ('/' + type);
        if (noQuery.indexOf(type) >= 0) {
            delete opts.query;
        }
        if (!opts.query) {
            if (noQuery.indexOf(type) < 0) {
                return $q.reject();
            }
        } else {
            action = '/' + opts.query + action;
        }
        return lubTmdbHTTP(angular.extend({}, opts, {
            url:'movie' + action
        }));
    };
    return {
        movie:function (options) {
            return get(options, '');
        },
        alternativeTitles:function (options) {
            return get(options, 'alternative_titles');
        },
        casts:function (options) {
            return get(options, 'casts');
        },
        images:function (options) {
            return get(options, 'images');
        },
        keywords:function (options) {
            return get(options, 'keywords');
        },
        releases:function (options) {
            return get(options, 'releases');
        },
        trailers:function (options) {
            return get(options, 'trailers');
        },
        translations:function (options) {
            return get(options, 'translations');
        },
        similarMovies:function (options) {
            return get(options, 'similar_movies');
        },
        lists:function (options) {
            return get(options, 'lists');
        },
        changes:function (options) {
            return get(options, 'changes');
        },
        latest:function (options) {
            return get(options, 'keywords');
        },
        upcoming:function (options) {
            return get(options, 'upcoming');
        },
        nowPlaying:function (options) {
            return get(options, 'now_playing');
        },
        popular:function (options) {
            return get(options, 'popular');
        },
        topRated:function (options) {
            return get(options, 'top_rated');
        }
    };
}]);