# bit-loader-remove

[![Greenkeeper badge](https://badges.greenkeeper.io/MiguelCastillo/bit-loader-remove.svg)](https://greenkeeper.io/)

bit-loader plugin to remove modules from bundles

## Example

``` javascript
var Bitbundler = require("bit-bundler");
var jsPlugin = require("bit-loader-js");
var removePlugin = require("bit-loader-remove");

var bitbundler = new Bitbundler({
  loader: [
    jsPlugin(),
    removePlugin(['http-request'])
  ]
})
```
