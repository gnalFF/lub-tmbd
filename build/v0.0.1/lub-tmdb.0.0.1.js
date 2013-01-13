/**
 * AngularJS Tmdb API
 * @version v0.0.1 - 2013-01-13
 * @link https://github.com/gnalFF/lub-tmbd
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/**
 * Module configuring basic api setup
 */
angular.module('lub-tmdb-config', [])
    .value('lubTmdbBaseURL','http://api.themoviedb.org/3/')
    .value('lubTmdbApiKey','');

/**
 * Module dealing with configuration
 * http://docs.themoviedb.apiary.io/#configuration
 */
angular.module('lub-tmdb-api-configuration', ['lub-tmdb-config'])
    .factory('lubTmdbApiConfiguration', function (lubTmdbBaseURL, lubTmdbApiKey, $http, $q) {
        var configuration;
        var get = function () {
            var defer = $q.defer();
            if (configuration) {
                defer.resolve(configuration);
                return defer.promise;
            }
            $http.jsonp(lubTmdbBaseURL + 'configuration', {
                params:{
                    api_key:lubTmdbApiKey,
                    callback:'JSON_CALLBACK'
                }
            })
                .success(function (data) {
                    configuration = data;
                    defer.resolve(configuration);
                })
                .error(function (data) {
                    defer.reject(data);
                });
            return defer.promise;
        };
        return {
            get:get,
            refresh:function () {
                configuration = null;
                return get();
            }
        };
    });

/**
 * Module dealing with movie related stuff.
 * http://docs.themoviedb.apiary.io/#movies
 */
angular.module("lub-tmdb-api-movie", ['lub-tmdb-config', 'lub-tmdb-api-configuration'])
    .factory('lubTmdbApiMovie', function (lubTmdbBaseURL, lubTmdbApiKey, $q, $http) {
        var get = function (movieId, type, options) {
            var defer = $q.defer();
            var action = type === '' ? '' : ('/' + type);
            if (movieId === '') {
                if (['latest', 'upcoming', 'now_playing', 'popular', 'top_rated'].indexOf(type) < 0) {
                    return defer.reject();
                }
            } else {
                action = '/' + movieId + action;
            }
            var url = lubTmdbBaseURL + 'movie' + action;
            options = options || {cache:true};
            var doCache = options.cache;
            delete options.cache;
            $http.jsonp(url, {
                params:angular.extend({api_key:lubTmdbApiKey, callback:'JSON_CALLBACK'}, options),
                cache:doCache
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
            }
            /**
             * This is a post method -> implement later
            rating:function (movieId, options) {
                return get(movieId, 'rating', options);
            }
             **/
        };
    });
/**
 * Module dealing with search related stuff.
 * http://docs.themoviedb.apiary.io/#search
 */
angular.module('lub-tmdb-api-search', ['lub-tmdb-config'])
    .factory('lubTmdbApiSearch', function ($q, lubTmdbBaseURL, lubTmdbApiKey, $http) {
        var get = function (query, type, options) {
            options = options || {cache:true};
            var doCache = options.cache;
            delete options.cache;
            var defer = $q.defer();
            var url = lubTmdbBaseURL+ 'search/' + type;
            $http.jsonp(url,{
                params:angular.extend({api_key:lubTmdbApiKey, query:query,callback:'JSON_CALLBACK'}, options),
                cache:doCache
            }).success(function (result) {
                    defer.resolve(result);
                }).error(function (result) {
                    defer.reject(result);
                });
            return defer.promise;
        };
        return {
            movie:function (query, options) {
                return get(query, 'movie', options);
            },
            collection:function (query, options) {
                return get(query, 'collection', options);
            },
            person:function (query, options) {
                return get(query, 'person', options);
            },
            list:function (query, options) {
                return get(query, 'list', options);
            },
            company:function (query, options) {
                return get(query, 'company', options);
            },
            keyword:function (query, options) {
                return get(query, 'keyword', options);
            }
        };
    });
angular.module('lub-tmdb-api',['lub-tmdb-api-configuration','lub-tmdb-api-movie','lub-tmdb-api-search','lub-tmdb-config']);