lub-tmbd - TMDB API for angularjs
========

This is a javascript api for http://www.themoviedb.org/

## Requirements

* AngularJS

## Installation

The repository comes with the modules pre-built and compressed into the `build/` directory.

```javascript
angular.module('myApp', ['lub-tmdb-api']).value('lubTmdbApiKey','[ENTER YOUR API KEY HERE]');
```

To run the example provide an api key in the index.html file

## Development

You do not need to build the project to use it - see above - but if you are working on it then this is what you need to know.

### Requirements

0. Install [Node.js](http://nodejs.org/) and NPM (should come with)

1. Install local dependencies:

```bash
$ npm install
```

2. Install global dependencies `grunt` and `testacular`:

```bash
$ npm install -g testacular grunt
```

### Build Files & Run Tests

Before you commit, always run `grunt` to build and test everything once.

```bash
$ grunt
```

### Test & Develop

The modules come with unit tests that should be run on any changes and certainly before commiting changes to the project.  The unit tests should also provide further insight into the usage of the modules.

First, start the testacular server:
```bash
$ grunt server
```
Then, open your browser to http://localhost:8080 or run

```bash
$ grunt test
```
