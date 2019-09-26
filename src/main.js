import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routerConfig'
import store from './store'
import axios from 'axios'
import Loading from './components/Loading'
import filters from './filters'
//Vue.filter(名字，函数)
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.use(VueRouter);
Vue.use(Loading);

//关于axios配置
axios.interceptors.request.use(function(config){//配置发送请求的信息
  store.dispatch('showLoading')
  return config;
},function(error){
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {
  return Promise.reject(error);
});
Vue.prototype.$http=axios;//把axios对象挂到vue原型上，这样其他页面在使用axios的时候直接  this.$http就可以了，不需要每次都引入axios了

const router=new VueRouter({
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior:()=>({ y:0}),// 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
});

require ('../src/assets/css/base.css')  //引入全局的base文件

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
 