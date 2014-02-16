'use strict';

/**
 * Grunt setup
 */
module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    conditionizr: {
      src: 'src',
      dist: 'dist',
      test: 'test',
      core: ['<%= conditionizr.src %>/conditionizr.js']
    },

    banner: '/*! <%= pkg.title %> v<%= pkg.version %> | (c) <%= grunt.template.today(\'yyyy\') %> @toddmotto, @markgdyr | MIT license | conditionizr.com */\n',

    jshint: {
      gruntfile: 'Gruntfile.js',
      files: ['<%= conditionizr.core %>'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    jasmine : {
      src : 'dist/**/*.js',
      options : {
        specs : 'test/**/*.js'
      }
    },

    concat: {
      dist: {
        src: ['<%= conditionizr.core %>'],
        dest: '<%= conditionizr.dist %>/conditionizr.js',
      },
      options: {
        stripBanners: true,
        banner: '<%= banner %>'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= conditionizr.dist %>/conditionizr.js',
        dest: '<%= conditionizr.dist %>/conditionizr.min.js'
      },
    },

    clean: {
      dist: [ 'dist' ]
      // test: [ '<%= conditionizr.test %>/conditionizr.js' ]
    },

    copy: {
      test: {
        src: '<%= conditionizr.src %>/conditionizr.js',
        dest: '<%= conditionizr.test %>/conditionizr.js',
      },
    },

    connect: {
      test: {
        options: {
          port: 9000,
          hostname: '*',
          open: true,
          keepalive: true,
          base: 'test'
        }
      }
    },

    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile'],
      },
      js: {
        files: '<%= jshint.files %>',
        tasks: ['jshint', 'uglify'],
      }
    }
  });


  /**
   * Default Task
   * run `grunt`
   */
  grunt.registerTask('default', [
    'clean',
    'jshint',
    'concat',
    'uglify',
    'jasmine'
  ]);


  /**
   * Create test server
   * run `grunt test`
   */
  grunt.registerTask('test', [
    'clean:test',
    'copy:test',
    'connect:test'
  ]);

};
