import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueScrollTo from 'vue-scrollto'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDzUszvcmkM76CAYDTCoKfONHtKZ7A7qvs'
    }
})
Vue.use(VueScrollTo)

export const eventBus = new Vue()

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
})
