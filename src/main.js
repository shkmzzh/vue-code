import Vue from 'vue'
import App from './App.vue'
// 导入通用css样式
import '@/assets/styles/base.css'
import '@/assets/styles/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
