/**
 * Module configuring basic api setup
 */
angular.module('lub-tmdb-config', [])
    .value('lubTmdbBaseURL','http://api.themoviedb.org/3/')
    .value('lubTmdbApiKey','')
    .value('lubTmdbConnectionMethod','jsonp')
    .value('lubDefaultCache',true);
