/**
 * Module dealing with movie related stuff.
 * http://docs.themoviedb.apiary.io/#movies
 */
angular.module("lub-tmdb-api-movie", ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiMovie', function (lubTmdbBaseURL, $q, lubTmdbHTTP) {
        var get = function (movieId, type, options, doCache) {
            var action = type === '' ? '' : ('/' + type);
            if (movieId === '') {
                if (['latest', 'upcoming', 'now_playing', 'popular', 'top_rated'].indexOf(type) < 0) {
                    return $q.reject();
                }
            } else {
                action = '/' + movieId + action;
            }
            var url = lubTmdbBaseURL + 'movie' + action;
            return lubTmdbHTTP(url, options, doCache);
        };
        return {
            movie:function (movieId, options, doCache) {
                return get(movieId, '', options);
            },
            alternativeTitles:function (movieId, options, doCache) {
                return get(movieId, 'alternative_titles', options, doCache);
            },
            casts:function (movieId, options, doCache) {
                return get(movieId, 'casts', options, doCache);
            },
            images:function (movieId, options, doCache) {
                return get(movieId, 'images', options, doCache);
            },
            keywords:function (movieId, options, doCache) {
                return get(movieId, 'keywords', options, doCache);
            },
            releases:function (movieId, options, doCache) {
                return get(movieId, 'releases', options, doCache);
            },
            trailers:function (movieId, options, doCache) {
                return get(movieId, 'trailers', options, doCache);
            },
            translations:function (movieId, options, doCache) {
                return get(movieId, 'translations', options, doCache);
            },
            similarMovies:function (movieId, options, doCache) {
                return get(movieId, 'similar_movies', options, doCache);
            },
            lists:function (movieId, options, doCache) {
                return get(movieId, 'lists', options, doCache);
            },
            changes:function (movieId, options, doCache) {
                return get(movieId, 'changes', options, doCache);
            },
            latest:function (options, doCache) {
                return get('', 'keywords', options, doCache);
            },
            upcoming:function (options, doCache) {
                return get('', 'upcoming', options, doCache);
            },
            nowPlaying:function (options, doCache) {
                return get('', 'now_playing', options, doCache);
            },
            popular:function (options, doCache) {
                return get('', 'popular', options, doCache);
            },
            topRated:function (options, doCache) {
                return get('', 'top_rated', options, doCache);
            }
            /**
             * This is a post method -> implement later
             rating:function (movieId, options) {
                return get(movieId, 'rating', options);
            }
             **/
        };
    });