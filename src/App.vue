<template>
  <div id="app">
	<loading v-show='loading'></loading>
    <NavView v-show='headerShow'></NavView>
	<transition name='slide-down'>
		<keep-alive>
		<router-view  class="router-view"></router-view>
		</keep-alive>	
	</transition>

    
    <FooterView v-show="footerShow"></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav.vue'
//import HomeView from './components/Home'
import FooterView from './components/Footer'
import {mapGetters,mapActions} from 'vuex'

export default {
	watch: {
		$route(to,from){
			if(to.path=='user-info' || to.path=='user-reg' || to.path=='user-login' || to.path.indexOf('article')!=-1){
				this.$store.dispatch('hideHeader')
			}else{
				this.$store.dispatch('showHeader')
			}
			if(to.path.indexOf('article')==-1){
				this.$store.dispatch('showFooter')
			}
			else{
				this.$store.dispatch('hideFooter')
			}

		}
	},
	computed: mapGetters([
		'headerShow',
		'loading',
		'footerShow'
	]),
  components:{
    NavView,
   // HomeView,
    FooterView
  },

}
</script>

<style>
@import './assets/css/index.css';
	.slide-up-enter-active, .slide-up-leave-active {
	  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .7;
	  transform: translate3d(0, 4em, 0);
	}
	.slide-up-enter, .slide-up-leave-active {
	  opacity: .3;
	  transform: translate3d(0, 4em, 0);
	}

	.slide-down-enter-active, .slide-down-leave-active {
	  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .7;
	  transform: translate3d(0, 6em, 0);
	}
	.slide-down-enter, .slide-down-leave-active {
	  opacity: .1;
	  transform: translate3d(0, 6em, 0);
	}

	.slide-left-enter-active, .slide-left-leave-active {
	  transition: all .2s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .5;
	  transform: translate3d(2em, 0, 0);
	}

	.slide-left-enter, .slide-left-leave-active {
	  opacity: .3;
	  transform: translate3d(2em, 0, 0);
	}

	.slide-right-enter-active, .slide-right-leave-active {
	  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
	  opacity: .5;
	  transform: translate3d(5em, 0, 0);
	}
	.slide-right-enter, .slide-right-leave-active {
	  opacity: .3;
	  transform: translate3d(5em, 0, 0);
	}

	.fade-enter-active, .fade-leave-active {
	  transition: opacity .4s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
</style>
