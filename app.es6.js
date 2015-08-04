var mojs = require('mo-js');
var Howl = require('howler').Howl;
require('./css/styles.styl');

// SCENES
var cube        = require('./scenes/cube/cube.es6.js')
var mole        = require('./scenes/mole/mole.es6.js')
var moleRanting = require('./scenes/mole-ranting/mole-ranting.es6.js')
var close       = require('./scenes/close/close.es6.js')

var main = {
  s:         1, // global time coefficient
  zHack:     ' translateZ(0) ',
  mainTween: new mojs.Timeline,
  init() {
    this.vars();
    mole.init(this);
    moleRanting.init(this);
    close.init(this);
    // this.mainTween.start();
    this.mainTween.setProgress(1);
  },
  vars() {
    this.moleEl            = document.querySelector('#js-mole');
    this.moleHandEl        = document.querySelector('#js-mole-hand');
    this.moleConeEl        = document.querySelector('#js-mole-hat-cone');
    this.moleGlassesEl     = document.querySelector('#js-mole-glasses');
    this.moleGlassesLeftEl = document.querySelector('#js-mole-glasses-left');
    this.moleMouthEl       = document.querySelector('#js-mole-mouth');
    this.moleMouthInnerEl  = document.querySelector('#js-mole-mouth-inner');
    this.moleMouthOuterEl  = document.querySelector('#js-mole-mouth-outer');
    this.moleHandLeftEl    = document.querySelector('#js-mole-hand-left');
  }
}

main.init();
