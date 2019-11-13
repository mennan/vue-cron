import Vue from "vue";
import ElementUI from "element-ui";
import cron from "../src";
import "element-ui/lib/theme-chalk/index.css";
import Test from "./test.vue";

Vue.use(cron);
Vue.use(ElementUI);

new Vue({ el: "#app", render: h => h(Test) });
