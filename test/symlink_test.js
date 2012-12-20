var grunt = require('grunt');
var fs = require('fs');

exports.symlink = {
  single: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('single.js');
    var expected = grunt.file.read('test/fixtures/single.js');
    test.equal(expected, actual, 'should allow for a single file symlink to be created');

    test.done();
  },
  singleOverwrite: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('single2.js');
    var expected = grunt.file.read('test/fixtures/single2.js');
    test.equal(expected, actual, 'should allow for a single file symlink to be overwriten');

    test.done();
  },
  directory: function(test) {
    'use strict';

    test.expect(1);

    var actual = fs.readdirSync('folder_one').sort();
    var expected = fs.readdirSync('test/fixtures/folder_one').sort();
    test.deepEqual(expected, actual, 'should allow for a directory symlink to be created');

    test.done();
  },
  directoryOverwrite: function(test) {
    'use strict';

    test.expect(1);

    var actual = fs.readdirSync('folder_two').sort();
    var expected = fs.readdirSync('test/fixtures/folder_two').sort();
    test.deepEqual(expected, actual, 'should allow for a directory symlink to be overwriten');

    test.done();
  },
  singleInNewDirectory: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/single.js');
    var expected = grunt.file.read('test/fixtures/single.js');
    test.equal(expected, actual, 'should allow for a single file symlink to be created in a new directory');

    test.done();
  },
  directoryInNewDirectory: function(test) {
    'use strict';

    test.expect(1);

    var actual = fs.readdirSync('tmp/test/folder_one').sort();
    var expected = fs.readdirSync('test/fixtures/folder_one').sort();
    test.deepEqual(expected, actual, 'should allow for a directory symlink to be created');

    test.done();
  }
};
