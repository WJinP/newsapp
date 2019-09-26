const LoadingComponent = require('./Loading.vue').default;
const loading = {
  install: function(Vue) {
    Vue.component('loading', LoadingComponent)
  }
}
module.exports = loading

