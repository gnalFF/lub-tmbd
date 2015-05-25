/**
 * Module dealing with tv related stuff.
 * http://docs.themoviedb.apiary.io/#tv
 */
angular.module("lub-tmdb-api-tv", ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiTv', ["$q", "lubTmdbHTTP", function ($q, lubTmdbHTTP) {
    var noQuery = ['latest', 'airing_today', 'on_the_air', 'popular', 'top_rated'];
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
            url:'tv' + action
        }));
    };
    return {
        tv:function (options) {
            return get(options, '');
        },
        alternativeTitles:function (options) {
            return get(options, 'alternative_titles');
        },
        images:function (options) {
            return get(options, 'images');
        },
        keywords:function (options) {
            return get(options, 'keywords');
        },
        videos:function (options) {
            return get(options, 'videos');
        },
        translations:function (options) {
            return get(options, 'translations');
        },
        similar:function (options) {
            return get(options, 'similar');
        },
        changes:function (options) {
            return get(options, 'changes');
        },
        latest:function (options) {
            return get(options, 'keywords');
        },
        airingToday:function (options) {
            return get(options, 'airing_today');
        },
        onTheAir:function (options) {
            return get(options, 'on_the_air');
        },
        popular:function (options) {
            return get(options, 'popular');
        },
        topRated:function (options) {
            return get(options, 'top_rated');
        }
    };
}]);