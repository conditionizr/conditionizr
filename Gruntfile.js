/**
 * Grunt setup for running Jasmine tests in PhantomJS
 * as `gulp-jasmine` doesn't currently support PhantomJS.
 */

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jasmine : {
      src : 'src/conditionizr.js',
      options : {
        specs : 'test/Conditionizr-spec.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', ['jasmine']);

};
