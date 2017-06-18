'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animate = require('animate.css/animate.css');

var _animate2 = _interopRequireDefault(_animate);

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
  return particlesJS.load('particles-js', '../external-libraries/particles/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
  });
}

var _default = {
  registerPlugins: function registerPlugins() {
    var wow = registerWOW();
    return {
      wow: wow.init(),
      particles: registerParticles()
    };
  }
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(registerWOW, 'registerWOW', 'C:/Users/Paolo/Desktop/Reactstack/client/public/utils/Utils.js');

  __REACT_HOT_LOADER__.register(registerParticles, 'registerParticles', 'C:/Users/Paolo/Desktop/Reactstack/client/public/utils/Utils.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/utils/Utils.js');
}();

;
//# sourceMappingURL=Utils.js.map