import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router'
import axios from 'axios'
import coreui from '@coreui/coreui/dist/js/coreui.min.js'
import './css/style.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui'

import '@/assets/scss/style.scss'

const app = createApp(App)

app.use(router)

//Directives
app.directive('blur', {
    mounted(el) {
        el.onfocus = (ev) => ev.target.blur()
    }
})

//Axios config
axios.defaults.withCredentials = true
app.config.globalProperties.axios = axios

//Coreui
app.config.globalProperties.coreui = coreui

app.mount('#app')
