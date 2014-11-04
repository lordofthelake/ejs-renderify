# ejs-renderify

[EJS](http://npmjs.org/package/ejs) precompiler for
[Browserify](http://browserify.org).

## Installation ##

``` bash
npm install ejs-renderify
```

## Usage ##

If you're compiling your code from the command-line, include `-t ejs-renderify`:

``` bash
browserify -t ejs-renderify index.js -o bundle.js
```

From the API:

``` javascript
b.transform('ejs-renderify', { template: 1, variables: 2, here: 3 })
```
