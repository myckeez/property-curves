var mojs     = require('mo-js');

var door = {
  init: function (proto) {
    Object.setPrototypeOf(this, proto);
    this.vars();
    this.createTween();
    // this.cubeMainTween.start();
  },
  vars: function () {
    this.doorEl             = document.querySelector('#js-door');
    this.doorShadowEl       = document.querySelector('#js-door-shadow');
    this.doorHandleShadowEl = document.querySelector('#js-door-handle-shadow');
  },
  createTween: function () {
    var tween = new mojs.Tween({
      duration: 1000*this.s,
      delay: this.delay*this.s,
      onUpdate: (p) => {
        // return;
        var bounce = mojs.easing.bounce.out(p);
        var pp = mojs.easing.cubic.out(mojs.easing.cubic.out(p));
        mojs.h.setPrefixedStyle(this.doorEl, 'transform', `rotateY(${-125*bounce}deg) translateX(${8*(1-pp)}px) translateY(${8*(1-pp)}px) scaleX(${1-(.25*bounce)})`);

        var shadowBounce = mojs.easing.cubic.in(bounce);
        mojs.h.setPrefixedStyle(this.doorShadowEl, 'transform', `scaleX(${shadowBounce}) translateZ(0)`);
        this.doorShadowEl.style.opacity = shadowBounce;

        mojs.h.setPrefixedStyle(this.doorHandleShadowEl, 'transform', `rotateZ(${-75*(1-bounce)}deg) scaleY(${bounce}) translateZ(0)`);
        this.doorHandleShadowEl.style.opacity = bounce;

      }
    });
    this.moleTween.add(tween);

  }
}


module.exports = door;