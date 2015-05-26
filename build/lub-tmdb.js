/**
 * AngularJS Tmdb API
 * @version v0.3.0 - 2015-05-25
 * @link https://github.com/gnalFF/lub-tmbd
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/**
 * Module configuring basic api setup
 */
angular.module('lub-tmdb-config', [])
    .value('lubTmdbBaseURL','http://api.themoviedb.org/3/')
    .value('lubTmdbApiKey','')
    .value('lubTmdbConnectionMethod','jsonp')
    .value('lubDefaultCache',true);

/**
 * Module dealing with configuration
 * http://docs.themoviedb.apiary.io/#configuration
 */
angular.module('lub-tmdb-api-configuration', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiConfiguration', ["lubTmdbHTTP",function (lubTmdbHTTP) {
        return {
            get:function (options) {
                return lubTmdbHTTP(angular.extend({}, options, {
                    url:'configuration'
                }));
            }
        };
    }]);

angular.module('lub-tmdb-api-change', ['lub-tmdb-http', 'lub-tmdb-config'])
    .factory('lubTmdbApiChange', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        movie:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"movie/changes"
            }));
        },
        person:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"person/changes"
            }));
        }
    };
}]);
/**
 * Created with JetBrains WebStorm.
 * User: gnalFF
 * Date: 15.01.13
 * Time: 10:32
 * To change this template use File | Settings | File Templates.
 */
angular.module('lub-tmdb-api-collection', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiCollection', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        collection:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"collection/" + options.query
            }));
        },
        images:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"collection/" + options.query + "/images"
            }));
        }
    };
}]);
angular.module('lub-tmdb-api-company', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiCompany', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        company:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"company/" + options.query
            }));
        },
        movies:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"company/" + options.query + "/movies"
            }));
        }
    };
}]);
angular.module('lub-tmdb-api-genre', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiGenre', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        list:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"genre/list"
            }));
        },
        movies:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"genre/" + options.query + "/movies"
            }));
        }
    };
}]);
angular.module('lub-tmdb-http', ['lub-tmdb-config'])
    .factory('lubTmdbHTTP', ["$http", "$q", "lubTmdbApiKey", "lubTmdbBaseURL", "lubTmdbConnectionMethod", "lubDefaultCache", function ($http, $q, lubTmdbApiKey, lubTmdbBaseURL, lubTmdbConnectionMethod, lubDefaultCache) {
    return function (options) {
        var url = lubTmdbBaseURL + options.url;
        var params = angular.extend({}, options.params, {
            api_key:lubTmdbApiKey
        });
        if (lubTmdbConnectionMethod === 'jsonp') {
            params.callback = 'JSON_CALLBACK';
        }
        return $http[lubTmdbConnectionMethod](url, {
            params:params,
            cache:angular.isDefined(options.cache) ? options.cache : lubDefaultCache
        });
    };
}]);
angular.module('lub-tmdb-api-keyword', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiKeyword', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        keyword:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"keyword/" + options.query
            }));
        },
        movies:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"keyword/" + options.query + "/movies"
            }));
        }
    };
}]);
angular.module('lub-tmdb-api-list', ['lub-tmdb-http'])
    .factory('lubTmdbApiList', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        list:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:"list/" + options.query
            }));
        }
    };
}]);
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
angular.module('lub-tmdb-api-people', ['lub-tmdb-http'])
    .factory('lubTmdbApiPeople', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    return {
        person:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query
            }));
        },
        credits:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/credits"
            }));
        },
        images:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/images"
            }));
        },
        changes:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:'person/' + options.query + "/changes"
            }));
        },
        latest:function (options) {
            return lubTmdbHTTP(angular.extend({}, options, {
                url:'person/latest'
            }));
        }
    };
}]);
/**
 * Module dealing with search related stuff.
 * http://docs.themoviedb.apiary.io/#search
 */
angular.module('lub-tmdb-api-search', ['lub-tmdb-config', 'lub-tmdb-http'])
    .factory('lubTmdbApiSearch', ["lubTmdbHTTP", function (lubTmdbHTTP) {
    var get = function (type, options) {
        var opts = angular.extend({}, {
            params:{}
        }, options);
        opts.params.query = opts.query;
        return lubTmdbHTTP(angular.extend({}, opts, {
            url:'search/' + type
        }));
    };
    return {
        movie:function (options) {
            return get('movie', options);
        },
        collection:function (options) {
            return get('collection', options);
        },
        person:function (options) {
            return get('person', options);
        },
        list:function (options) {
            return get('list', options);
        },
        company:function (options) {
            return get('company', options);
        },
        keyword:function (options) {
            return get('keyword', options);
        },
        multi:function (options) {
            return get('multi', options);
        }
    };
}]);

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
angular.module('lub-tmdb-api', ['lub-tmdb-api-movie',
    'lub-tmdb-api-search',
    'lub-tmdb-api-configuration',
    'lub-tmdb-api-collection',
    'lub-tmdb-api-people',
    'lub-tmdb-api-list',
    'lub-tmdb-api-change',
    'lub-tmdb-api-keyword',
    'lub-tmdb-api-genre',
    'lub-tmdb-api-company',
    'lub-tmdb-api-tv'])
    .factory('lubTmdbApi', [
    "lubTmdbApiSearch",
    "lubTmdbApiConfiguration",
    "lubTmdbApiMovie",
    "lubTmdbApiCollection",
    "lubTmdbApiPeople",
    "lubTmdbApiList",
    "lubTmdbApiCompany",
    "lubTmdbApiGenre",
    "lubTmdbApiKeyword",
    "lubTmdbApiChange",
    "lubTmdbApiTv",
    function (lubTmdbApiSearch, lubTmdbApiConfiguration, lubTmdbApiMovie, lubTmdbApiCollection, lubTmdbApiPeople, lubTmdbApiList, lubTmdbApiCompany, lubTmdbApiGenre, lubTmdbApiKeyword, lubTmdbApiChange) {
        return {
            search:lubTmdbApiSearch,
            configuration:lubTmdbApiConfiguration,
            movie:lubTmdbApiMovie,
            collection:lubTmdbApiCollection,
            people:lubTmdbApiPeople,
            list:lubTmdbApiList,
            company:lubTmdbApiCompany,
            genre:lubTmdbApiGenre,
            keyword:lubTmdbApiKeyword,
            change:lubTmdbApiChange
        };
    }]);