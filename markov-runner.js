(function (root) {

  var weightedRandom = function (spec) {
    var sum = 0, 
        random = Math.random();

    for (var i in spec) {
      var state = spec[i];
      sum += state[0];
      if (random <= sum) {
        return state[1]
      };
    }
  };


  var nextState = function (prev) {

    var states = root.__TRANSITIONS__[prev];
    var sorted = states.concat().sort(function (state) {
      return state[0];
    });

    window.__SDSD__ = requestAnimationFrame(function () {
      setTimeout(function () {
        nextState(weightedRandom(sorted));
      }, 3000);
    });


    var output = document.getElementById('emotion');
    output.style.filter = root.__HUE__[prev];
    output.innerHTML = root.__STORY__[prev];

  };

  document.addEventListener('DOMContentLoaded', function() {
    nextState(root.__INITIAL_STATE__);
}, false);

})(this);