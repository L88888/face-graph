import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";  //加载离线缓存资源
import router from "./router";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false;
/* 引用iviewUI 组件 */
Vue.use(ViewUI);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
