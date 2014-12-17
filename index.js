var ejs = require('ejs')
  , through = require('through')

module.exports = function(file, options, filters) {
  if (!/\.js\.ejs$/.test(file)) return through()

  options = options || {}
  filters = filters || {}
  
  for(var index in filters) { 
    if (filters.hasOwnProperty(index)) {
      ejs.filters[index] = filters[index];
    }
  }

  var buffer = ""

  return through(function write(chunk) {
    buffer += chunk
  }, function end() {
    this.queue(ejs.render(buffer, options));
    this.queue(null);
  })
}
