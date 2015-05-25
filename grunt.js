var testacular = require('testacular');
module.exports = function (grunt) {

    grunt.initConfig({
            pkg:grunt.file.readJSON('package.json'),
            build:{
                name:'<%= pkg.name %>',
                dir:'build'
            },
            meta:{
                banner:'/**\n' + ' * <%= pkg.description %>\n' +
                    ' * @version v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                    ' * @link <%= pkg.homepage %>\n' +
                    ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' + ' */'
            },
            concat:{
                build:{
                    src:['<banner:meta.banner>', 'modules/config/*.js', 'modules/apiKey/*.js', 'modules/*/*.js','modules/lub-tmdb-api.js'],
                    dest:'<%=build.dir%>/<%=build.name%>.js'
                }
            },
            min:{
                build:{
                    src:['<banner:meta.banner>', '<config:concat.build.dest>'],
                    dest:'<%= build.dir %>/<%= build.name %>.min.js'
                }
            },
            lint:{
                files:['modules/**/*.js']
            },
            jshint:{
                globals:{ // example directives
                    it:true,
                    inject:true,
                    expect:true,
                    module:true,
                    beforeEach:true,
                    describe: true,
                    console: true,
                    angular: true
                }
            }
        }
    );
    grunt.registerTask('default', 'lint concat min')
    grunt.registerTask('server', 'start server', function () {
        //Mark the task as async but never call done, so the server stays up
        var done = this.async();
        testacular.server.start({ configFile: 'test/testacular.conf.js'});
    });

    grunt.registerTask('test', 'run tests (make sure server task is run first)', function () {
        var done = this.async();
        grunt.utils.spawn({
            cmd: process.platform === 'win32' ? 'testacular.cmd' : 'testacular',
            args: process.env.TRAVIS ? ['start', 'test/testacular.conf.js', '--single-run', '--no-auto-watch', '--reporter=dots', '--browsers=Firefox'] : ['run']
        }, function (error, result, code) {
            if (error) {
                grunt.warn("Make sure the testacular server is online: run `grunt server`.\n" +
                    "Also make sure you have a browser open to http://localhost:8080/.\n" +
                    error.stdout + error.stderr);
                //the testacular runner somehow modifies the files if it errors(??).
                //this causes grunt's watch task to re-fire itself constantly,
                //unless we wait for a sec
                setTimeout(done, 1000);
            } else {
                grunt.log.write(result.stdout);
                done();
            }
        });
    });
};