/*
 * grunt-contrib-symlink
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Paul Dixon, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    lint: {
      all: ['grunt.js', 'tasks/*.js', '<config:nodeunit.tasks>']
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['tmp', 'single.js', 'single2.js', 'folder_one', 'folder_two']
    },

    // Configuration to be run (and then tested).
    symlink: {
      single: {
        target: 'test/fixtures/single.js',
        link:'single.js'
      },
      single2: {
        target: 'test/fixtures/single.js',
        link:'single2.js'
      },
      singleOverwrite:{
        target: 'test/fixtures/single2.js',
        link:'single2.js',
        options: {
          overwrite: true,
          force: false
        }
      },
      singleInNewDirectory:{
        target: 'test/fixtures/single.js',
        link:'tmp/single.js',
        options: {
          overwrite: true,
          force: true
        }
      },
      directory: {
        target: 'test/fixtures/folder_one',
        link:'folder_one'
      },
      directory2: {
        target: 'test/fixtures/folder_one',
        link:'folder_two'
      },
      directoryOverwrite:{
        target: 'test/fixtures/folder_two',
        link:'folder_two',
        options: {
          overwrite: true,
          force: false
        }
      },
      directoryInNewDirectory:{
        target: 'test/fixtures/folder_one',
        link:'tmp/test/folder_one',
        options: {
          overwrite: true,
          force: true
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tasks: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // The clean plugin helps in testing.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.renameTask('test', 'nodeunit');
  grunt.registerTask('test', 'clean symlink nodeunit clean');

  // By default, lint and run all tests.
  grunt.registerTask('default', 'lint test');
};
