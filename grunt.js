module.exports = function (grunt) {

    grunt.initConfig({
            pkg:grunt.file.readJSON('package.json'),
            build:{
                name:'<%= pkg.name %>.<%=pkg.version%>',
                dir:'build/v<%=pkg.version%>'
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
                    describe: true
                }
            }
        }
    );
    grunt.registerTask('default', 'lint concat min')

};