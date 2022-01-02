import Vue from "vue";
import vueDebounce from "vue-debounce";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(vueDebounce);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
