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

[node_symlink]: http://nodejs.org/api/fs.html#fs_fs_symlink_srcpath_dstpath_type_callback
