/**
 * Module dealing with movie related stuff.
 * http://docs.themoviedb.apiary.io/#movies
 */
angular.module("lub-tmdb-api-movie", ['lub-tmdb-config', 'lub-tmdb-api-configuration', 'lub-tmdb-apiKey'])
    .factory('lubTmdbApiMovie', function (lubTmdbConfig, lubTmdbApiKey, $q,$http) {
        var get = function (movieId, type, options) {
            var defer = $q.defer();
            var action = type === '' ? '':('/' + type);
            if (movieId === '') {
                if (!['latest', 'upcoming', 'now_playing', 'popular', 'top_rated'].indexOf(type)) {
                    return defer.reject();
                }
            } else {
                action = '/' + movieId + action;
            }
            var url = lubTmdbConfig.baseURL + 'movie' + action;
            options = options || {};
            $http.jsonp(url,{
                params:angular.extend({api_key:lubTmdbApiKey,callback:'JSON_CALLBACK'}, options),
                cache:options.cache
            })
                .success(function (data, status, headers, config) {
                    defer.resolve(data);
                }).error(function (data) {
                    defer.reject(data);
                });
            return defer.promise;
        };
        return {
            movie:function (movieId, options) {
                return get(movieId, '', options);
            },
            alternativeTitles:function (movieId, options) {
                return get(movieId, 'alternative_titles', options);
            },
            casts:function (movieId, options) {
                return get(movieId, 'casts', options);
            },
            images:function (movieId, options) {
                return get(movieId, 'images', options);
            },
            keywords:function (movieId, options) {
                return get(movieId, 'keywords', options);
            },
            releases:function (movieId, options) {
                return get(movieId, 'releases', options);
            },
            trailers:function (movieId, options) {
                return get(movieId, 'trailers', options);
            },
            translations:function (movieId, options) {
                return get(movieId, 'translations', options);
            },
            similarMovies:function (movieId, options) {
                return get(movieId, 'similar_movies', options);
            },
            lists:function (movieId, options) {
                return get(movieId, 'lists', options);
            },
            changes:function (movieId, options) {
                return get(movieId, 'changes', options);
            },
            latest:function (options) {
                return get('', 'keywords', options);
            },
            upcoming:function (options) {
                return get('', 'upcoming', options);
            },
            nowPlaying:function (options) {
                return get('', 'now_playing', options);
            },
            popular:function (options) {
                return get('', 'popular', options);
            },
            topRated:function (options) {
                return get('', 'top_rated', options);
            },
            rating:function (movieId,options) {
                return get(movieId, 'rating', options);
            }
        };
    });