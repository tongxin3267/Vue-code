// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 全局引入echarts,不过实际开发中会考虑到echart包体积过大而按开发需要按需引入包
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
//引入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '2QUQ7bVf2yDIuFij5LKAfGzfUndbPsFN'
})
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
// 主函数实例化根节点入口
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
