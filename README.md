# grunt-contrib-symlink [![Build Status](https://secure.travis-ci.org/gruntjs/grunt-contrib-symlink.png?branch=master)](http://travis-ci.org/gruntjs/grunt-contrib-symlink)

Create symlinks between files/directories

## Overview

This task can be used to create symlinks between files/directories in your project. It is a multitask and so can
be used to create multiple links.

### Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-contrib-symlink`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-contrib-symlink');
```

### Usage

Inside your `grunt.js` file add a section named `symlink`. This section specifies the target and link path, and optionally any options you want to use. Once the section has been added you can run the task with `grunt symlink`.

### Parameters

#### target ```string```

Path to the file/directory you want to link to. Paths will be relative to the grunt.js file unless an absolute path is used.

#### link ```string```

Path to the new file/directory link location. Paths will be relative to the grunt.js file unless an absolute path is used.

#### type ```string```


#### options ```object```

A hash of options to configure the symlink and tasks behaviour

##### overwrite ```boolean```

Choose whether or not to overwrite existing symlink/files, default is false.

##### force ```boolean```

Force can be used to create the directory structure for the link path if it has not previously been
created, default is false

##### type ```boolean```

To specifically set the type of symlink to be created, default type will be inferred from
the target type. Values can be 'dir', 'file', or 'junction'. see [node.js - fs][node_symlink] for more info

#### Usage Examples

```javascript
symlink: {
  docroot: {
    target: 'path/to/target',
    link: path/to/link
  },
  another: {
    target: 'path/to/target',
    link: path/to/link,
    options: {
      overwrite: true,
      force: true
    }
  }
}
```

## Release History
* 2012-12-20   v0.1.0   Initial Release

--
*Task submitted by [Paul Dixon](http://www.mintbridge.co.uk/).*

[grunt]: https://github.com/gruntjs/grunt
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md
[node_symlink]: http://nodejs.org/api/fs.html#fs_fs_symlink_srcpath_dstpath_type_callback
