module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'js/perfmatters.js',
                dest: 'js/perfmatters.min.js'
            }
        },

        cssmin: {
            target: {
                src: 'css/style.css',
                dest: 'css/style.min.css'
            }
        },

        inline: {
            dist: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        }
    });
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-inline');
    grunt.registerTask('default','inline');
};