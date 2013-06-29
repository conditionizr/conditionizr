/*!
 *  Gruntfile.js configuration
 */

'use strict';

module.exports = function ( grunt ) {

	/*
	 * Grunt init
	 */
	grunt.initConfig({

		/*
		 * Grunt JSON for project
		 */
		pkg: grunt.file.readJSON( 'config.json' ),

		/*
		 * Credit banner
		 */
		tag: {
			banner: "/*!\n" +
					" *  <%= pkg.title %> v<%= pkg.version %>\n" +
					" *  <%= pkg.description %>\n" +
					" *  <%= pkg.homepage %>\n" +
					" *  Authors: <%= pkg.authors[0].twitter %> and <%= pkg.authors[1].twitter %>\n" +
					" *  Copyright <%= pkg.year %> <%= pkg.name %>." +
					" <%= pkg.license.type %> licensed.\n" +
					" */\n"
		},

		/*
		 * Concat
		 */
		concat: {
			dist: {
				src: ["src/conditionizr.js"],
				dest: "dist/conditionizr.js"
			},
			options: {
				banner: "<%= tag.banner %>"
			}
		},

		/*
		 * UglifyJS
		 */
		uglify: {
			files: {
				src: ["dist/conditionizr.js"],
				dest: "dist/conditionizr.min.js"
			},
			options: {
				banner: "<%= tag.banner %>"
			}
		}

	});

	/*
	 * NodeJS grunt tasks
	 */
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	/*
	 * Register tasks
	 */
	grunt.registerTask("default",[
		"concat",
		"uglify"
	]);

};