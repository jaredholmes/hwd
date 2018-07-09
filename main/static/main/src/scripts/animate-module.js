import 'animate.css/animate.min.css';
// import Vue from 'vue';

// var v = new Vue({
//   el: '#app',
//   delimiters: ['[[', ']]'],
//   data: {
//
//   }
// });

var timeout = function(i) {
  var text = [
    "<a href='#' class='charcoal-text'><img src='https://png.icons8.com/ios/50/434343/accessibility2.png' class='slogan-icon'>&nbsp; Attractive and intuitive UI and UX design</a>",
    "<a href='#' class='charcoal-text'><img src='https://png.icons8.com/ios/50/434343/database.png' class='slogan-icon'>&nbsp; Robust, performant web applications</a>",
    "<a href='#' class='charcoal-text'><img src='https://png.icons8.com/ios/50/434343/search.png' class='slogan-icon'>&nbsp; Search engine optimization for traffic maximization</a>",
  ];

  setTimeout(function() {
    var slogan = document.getElementById('slogan-1');
    slogan.setAttribute('class', 'animated fadeOutRight');
    setTimeout(function() {
      slogan.innerHTML = text[i];
      slogan.setAttribute('class', 'animated fadeInLeft');
    }, 100);
    if (i < (text.length - 1)) {
      i++;
    } else {
      i = 0;
    }
    timeout(i);
  }, 6500);
};

timeout(-1);
