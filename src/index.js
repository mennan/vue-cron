import "bootstrap/dist/css/bootstrap.css";
import "vue-multiselect/dist/vue-multiselect.min.css";
import { jQuery as $ } from "jquery";
import "bootstrap";
import vueCron from "./index.vue";

export let cron = vueCron;

export default {
  install(Vue) {
    Vue.component(vueCron.name, vueCron);
  }
};
