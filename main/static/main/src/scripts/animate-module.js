import 'animate.css/animate.min.css';
import Vue from 'vue/dist/vue.min';
// import Vue from 'vue/dist/vue';

new Vue({
  el: '#app',
  delimiters: ['[[', ']]'],
  data: {
  },
  methods: {
    timeout(i) {
      var arrText = text;
      setTimeout( () => {
        var slogan = document.getElementById('slogan-1');
        slogan.setAttribute('class', 'animated fadeOutRight');
        setTimeout( () => {
          slogan.innerHTML = arrText[i];
          slogan.setAttribute('class', 'animated fadeInLeft');
        }, 100);
        if (i < (arrText.length - 1)) {
          i++;
        } else {
          i = 0;
        }
        this.timeout(i);
      }, 6500);
    },
  },
});
