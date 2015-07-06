var mojs = require('mo-js');
var Howl = require('howler').Howl;
require('./css/styles.styl');

// SCENES
var cube        = require('./scenes/cube/cube.es6.js')
var mole        = require('./scenes/mole/mole.es6.js')
var moleRanting = require('./scenes/mole-ranting/mole-ranting.es6.js')

var main = {
  s:      10, // global time coefficient
  zHack:  ' translateZ(0) '
}

cube.init(main);
mole.init(main);
moleRanting.init(main);