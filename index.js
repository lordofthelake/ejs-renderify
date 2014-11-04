var ejs = require('ejs')
  , through = require('through')

module.exports = function(file, options) {
  if (!/\.js\.ejs$/.test(file)) return through()

  options = options || {}

  var buffer = ""

  return through(function write(chunk) {
    buffer += chunk
  }, function end() {
    this.queue(ejs.render(buffer, options));
    this.queue(null);
  })
}
