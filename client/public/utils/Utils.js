import animate from 'animate.css/animate.css';
import WOW from 'wowjs';
import config from "./particlesjs-config.json"

// REGISTER WOWJS
function registerWOW () {
  return new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: false,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animateda
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
}

// REGISTER PARTICLES.js
function registerParticles () {
  return particlesJS('particles-js', config);
}

export default {
  registerPlugins: function () {
    const wow = registerWOW();
    return {
      wow: wow.init(),
      particles: registerParticles()
    }
  }
}
