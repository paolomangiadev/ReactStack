'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animate = require('animate.css/animate.css');

var _animate2 = _interopRequireDefault(_animate);

var _particles = require('particles.js');

var _particles2 = _interopRequireDefault(_particles);

var _wowjs = require('wowjs');

var _wowjs2 = _interopRequireDefault(_wowjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REGISTER WOWJS
function registerWOW() {
  return new _wowjs2.default({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: false, // act on asynchronously loaded content (default is true)
    callback: function callback(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animateda
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  });
}

// REGISTER PARTICLES.js
function registerParticles() {
  return _particles2.default.load('particles-js', 'https://api.myjson.com/bins/1fljk5', function () {
    console.log('callback - particles.js config loaded');
  });
}

exports.default = {
  registerPlugins: function registerPlugins() {
    var wow = registerWOW();
    return {
      wow: wow.init(),
      particles: registerParticles()
    };
  }
};
//# sourceMappingURL=Utils.js.map
