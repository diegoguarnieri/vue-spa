import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import coreui from '@coreui/coreui/dist/js/coreui.min.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import '@coreui/coreui/dist/css/coreui.min.css'
import '@coreui/coreui'

import '@/assets/scss/style.scss'

const app = createApp(App)

app.use(router)

//Axios config
axios.defaults.withCredentials = true
app.config.globalProperties.axios = axios

//Coreui
app.config.globalProperties.coreui = coreui

app.mount('#app')
