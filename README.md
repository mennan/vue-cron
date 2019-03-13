# vue-cron

![CocoaPods](https://img.shields.io/npm/dt/vue-cron.svg)
![CocoaPods](https://img.shields.io/npm/v/vue-cron.svg)

这是一个 cron 表达式生成插件,基于 vue 与 element-ui 实现
[demo](https://1615450788.github.io/vue-cron/dist/index)

## 依赖

- Vue 2.0.0+
- element-ui 2.0.0+

## 安装方式

```
npm install vue-cron
```

## 引入方式

```javascript
//前置配置
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//全局引入
import VueCron from "vue-cron";
Vue.use(VueCron); //使用方式：<vueCron></vueCron>

//局部引入
import { cron } from "vue-cron";

export default {
  template: "<cron/>",
  components: { cron }
};
```

## 示例

```vue
<template>
  <div class="cron">
    <h1>vue-cron</h1>
    <el-popover v-model="cronPopover">
      <cron @change="changeCron" @close="cronPopover = false" i18n="en"></cron>
      <el-input
        slot="reference"
        @click="cronPopover = true"
        v-model="cron"
        placeholder="请输入定时策略"
      ></el-input>
    </el-popover>
  </div>
</template>

<script>
import { cron } from "vue-cron";

export default {
  components: { cron },
  data() {
    return {
      cronPopover: false,
      cron: ""
    };
  },
  methods: {
    changeCron(val) {
      this.cron = val;
    }
  }
};
</script>
```

在示例中我使用了 es6(es2015)语法,你可能需要引入 babel-polyfill 才能正常运行,或者你也可以用 es5 的写法

## 参数

- i18n

  - 参数 `{String} language` 目前仅支持`en|cn`

  国际化支持

## 事件

- change(cronText)

  - 参数：`{String} cronText` cron 表达式的值

  当 corn 表达式的值发生变化变化时触发

- close()

  - 参数：无

  当点击 corn 表达式选择框取消按钮时触发

## 大小

- 31.1k

## 联系方式

邮箱 : 1615450788@qq.com

有任何问题请发 Issues 或者邮箱联系我-.- 谢谢!

Forked from: https://github.com/1615450788/vue-cron
