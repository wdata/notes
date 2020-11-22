import Vue from 'vue'
import App from './App'
// import router from './router'
Vue.config.productionTip = false

document.addEventListener('deviceready', function() {
    new Vue({
        el: '#app',
        // router,
        // store,
        template: '<App/>',
        components: { App }
    })
    window.navigator.splashscreen.hide()
}, false);
