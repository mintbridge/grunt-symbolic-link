/*
 * grunt-contrib-symlink
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Paul Dixon, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // TODO: ditch this when grunt v0.4 is released
  grunt.util = grunt.util || grunt.utils;

  var fs = require('fs');
  var path = require('path');
  var mkdirp = require('mkdirp');

  grunt.registerMultiTask('symlink', 'Create a symlink between paths', function() {
    var helpers = require('grunt-lib-contrib').init(grunt);

    var options = helpers.options(this, {
      overwrite: false,
      force: false,
      type: null
    });

    var target;
    var link;
    var linkDir;
    var type;
    var relative;
    var depth;

    grunt.verbose.writeflags(options, 'Options');

    // TODO: ditch this when grunt v0.4 is released
    this.files = helpers.normalizeMultiTaskFiles(this.data, this.target);

    target = path.normalize(this.data.target);
    link = path.normalize(this.data.link);
    linkDir = path.dirname(link);

    if (target.length === 0) {
      grunt.fail.warn('Unable to compile; no valid target was found.');
    }

    // does the src exist?
    if ( ! fs.existsSync(target)) {
      grunt.fail.warn('The target file/directory [' + target + '] does not exist.');
    }
    type = options.type || fs.statSync(target).isFile() ? 'file' : 'dir';

    // does the destination already exist?
    if (fs.existsSync(link)) {
      // replace it?
      if ( ! options.overwrite) {
        grunt.fail.warn('A file or directory already exists at ' + link);
      }
      else {
        // delete the current file
        require("rimraf").sync(link);
      }
    }

    // does the parent diectory exist?
    if ( ! fs.existsSync(linkDir)) {
      // create it?
      if ( ! options.force) {
        grunt.fail.warn('The destination directory ' + link + ' does not exist');
      }
      else {
        grunt.verbose.or.write('Creating directory ' + linkDir.cyan + '...');
        mkdirp.sync(linkDir);
        grunt.verbose.or.ok();
      }
    }

    if(link[0] !== '/') {
      //prepend with dots to make it relative
      depth = link.match(/\//g);
      if (depth && depth.length > 0) {
        target = new Array(depth.length+1).join("../") + target;
      }
    }

    grunt.verbose.or.write('Creating symlink to ' + target.cyan + ' at ' + link.cyan + '...');
    fs.symlinkSync(target, link, type);
    grunt.verbose.or.ok();

  });

};
