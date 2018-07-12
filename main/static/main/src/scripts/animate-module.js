import 'animate.css/animate.min.css';
import Vue from 'vue';
// import Vue from 'vue/dist/vue';

new Vue({
  el: '#app',
  // Delimiters prevent clashing with Jinja
  delimiters: ['[[', ']]'],
  data: {
  },
  methods: {
    timeout(i) {
      // text is declared in HTML to allow {% static %} use with Django
      var arrText = text;
      // Arrow function allows later reference to this.timeout, since it ensures
      // that this remains the Vue object
      setTimeout( () => {
        var slogan = document.getElementById('slogan-1');
        slogan.setAttribute('class', 'animated fadeOutRight');
        // The contents of the slogan change and it is faded back in after 100ms
        setTimeout( () => {
          slogan.innerHTML = arrText[i];
          slogan.setAttribute('class', 'animated fadeInLeft');
        }, 100);
        if (i < (arrText.length - 1)) {
          i++;
        } else {
          i = 0;
        }
        // Recall method for recursive loop
        this.timeout(i);
      }, 6500);
    },
  },
});
