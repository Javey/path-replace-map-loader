var fs = require('fs');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
    this.cacheable && this.cacheable();
    var map = global.__PATH_REPLACE_MAP;
    var newPath = map[this.resourcePath];
    if (newPath && fs.existsSync(newPath)) {
        this.dependency(newPath);
        return fs.readFileSync(newPath);
    }
    return source;
};

module.exports.raw = true;
