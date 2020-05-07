(function (root) {
  var obj = {

    "Calm" : [
      [
        [0.2, 'Happy'],
        [0.2, 'Bored'],
        [0.2, 'SelfConscious'],
        [0.2, 'Uneasy'],
        [0.1, 'Insecure'],
        [0.1, 'Disconnected'],
      ],
      `Calm`,
      'hue-rotate(0deg)'
    ],

    "Happy" : [
      [
        [0.2, 'Calm'],
        [0.2, 'Euphoric'],
        [0.1, 'Angry'],
        [0.15, 'Guilty'],
        [0.1, 'Afraid'],
        [0.15, 'Jealous'],
        [0.15, 'Guilty'],
        [0.15, 'Sad'],
      ],
      `Happy`,
      'hue-rotate(20deg)'
    ],

    "Euphoric" : [
      [
        [0.8, 'Happy'],
        [0.2, 'Euphoric'],
      ],
      `Euphoric`,
      'hue-rotate(30deg)'
    ],

    "Bored" : [
      [
        [0.2, 'Angry'],
        [0.15, 'SelfConscious'],
        [0.2, 'Uneasy'],
        [0.15, 'Insecure'],
        [0.15, 'Disconnected'],
        [0.15, 'Calm'],
      ],
      `Bored`,
      'hue-rotate(150deg)'
    ],

    "Angry" : [
      [
        [0.2, 'Bored'],
        [0.1, 'Furious'],
        [0.1, 'Guilty'],
        [0.2, 'Afraid'],
        [0.1, 'Jealous'],
        [0.1, 'Guilty'],
        [0.1, 'Sad'],
        [0.1, 'Happy'],
      ],
      `Angry`,
      'hue-rotate(160deg)'
    ],

    "Furious" : [
      [
        [0.8, 'Angry'],
        [0.2, 'Furious'],
      ],
      `Furious`,
      'hue-rotate(170deg)'
    ],

    "SelfConscious" : [
      [
        [0.2, 'Guilty'],
        [0.15, 'Bored'],
        [0.2, 'Uneasy'],
        [0.15, 'Insecure'],
        [0.2, 'Disconnected'],
        [0.1, 'Calm'],
      ],
      `SelfConscious`,
      'hue-rotate(350deg)'
    ],

    "Guilty" : [
      [
        [0.1, 'SelfConscious'],
        [0.1, 'SelfCondemning'],
        [0.1, 'Angry'],
        [0.15, 'Afraid'],
        [0.1, 'Jealous'],
        [0.15, 'Guilty'],
        [0.15, 'Sad'],
        [0.15, 'Happy'],
      ],
      `Guilty`,
      'hue-rotate(100deg)'
    ],

    "SelfCondemning" : [
      [
        [0.8, 'Guilty'],
        [0.2, 'SelfCondemning'],
      ],
      `SelfCondemning`,
      'hue-rotate(120deg)'
    ],

    "Uneasy" : [
      [
        [0.2, 'Afraid'],
        [0.15, 'Bored'],
        [0.2, 'SelfConscious'],
        [0.15, 'Insecure'],
        [0.2, 'Disconnected'],
        [0.1, 'Calm'],
      ],
      `Uneasy`,
      'hue-rotate(130deg)'
    ],

    "Afraid" : [
      [
        [0.2, 'Uneasy'],
        [0.1, 'FilledWithDread'],
        [0.1, 'Angry'],
        [0.2, 'Guilty'],
        [0.1, 'Jealous'],
        [0.1, 'Guilty'],
        [0.1, 'Sad'],
        [0.1, 'Happy'],
      ],
      `Afraid`,
      'hue-rotate(270deg)'
    ],

    "FilledWithDread" : [
      [
        [0.8, 'Afraid'],
        [0.2, 'FilledWithDread'],
      ],
      `FilledWithDread`,
      'hue-rotate(220deg)'
    ],

    "Insecure" : [
      [
        [0.2, 'Jealous'],
        [0.15, 'Bored'],
        [0.2, 'SelfConscious'],
        [0.15, 'Uneasy'],
        [0.2, 'Disconnected'],
        [0.1, 'Calm'],
      ],
      `Insecure`,
      'hue-rotate(60deg)'
    ],

    "Jealous" : [
      [
        [0.2, 'Insecure'],
        [0.1, 'Resentful'],
        [0.1, 'Angry'],
        [0.15, 'Guilty'],
        [0.1, 'Afraid'],
        [0.1, 'Guilty'],
        [0.15, 'Sad'],
        [0.1, 'Happy'],
      ],
      `Jealous`,
      'hue-rotate(90deg)'
    ],

    "Resentful" : [
      [
        [0.8, 'Jealous'],
        [0.2, 'Resentful'],
      ],
      `Resentful`,
      'hue-rotate(250deg)'
    ],

    "Disconnected" : [
      [
        [0.2, 'Sad'],
        [0.1, 'Bored'],
        [0.15, 'SelfConscious'],
        [0.15, 'Uneasy'],
        [0.15, 'Insecure'],
        [0.15, 'Disconnected'],
        [0.1, 'Calm'],
      ],
      `Disconnected`,
      'hue-rotate(260deg)'
    ],

    "Sad" : [
      [
        [0.2, 'Disconnected'],
        [0.1, 'Anguished'],
        [0.1, 'Angry'],
        [0.1, 'Guilty'],
        [0.1, 'Afraid'],
        [0.1, 'Jealous'],
        [0.1, 'Guilty'],
        [0.1, 'Sad'],
        [0.1, 'Happy'],
      ],
      `Sad`,
      'hue-rotate(300deg)'
    ],

    "Anguished" : [
      [
        [0.8, 'Sad'],
        [0.2, 'Anguished'],
      ],
      `Anguished`,
      'hue-rotate(290deg)'
    ],

  };
  
  const story = {};
  const transitions = {};
  const hue = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];

      transitions[key] = element[0];
      story[key] = element[1];
      hue[key] = element[2];
      
    }
  }

  root.__STORY__ = story;
  root.__TRANSITIONS__ = transitions;
  root.__HUE__ = hue;
  root.__INITIAL_STATE__ = 'Calm';
})(this);