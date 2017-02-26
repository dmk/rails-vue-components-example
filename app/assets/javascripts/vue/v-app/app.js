var Hello = require('./components/Hello.vue');

var vueInit = function () {
  new Vue({
    el: '#app',
    components: { Hello }
  });
};

window.onload = vueInit;
