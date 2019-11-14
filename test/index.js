import Vue from "vue";
import cron from "../src";
import Test from "./test.vue";

Vue.use(cron);

new Vue({ el: "#app", render: h => h(Test) });
