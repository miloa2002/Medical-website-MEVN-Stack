import './assets/main.css'

import { createApp } from 'vue'
import ToastPlugin from 'vue-toast-notification'
import { createPinia } from 'pinia'

import 'vue-toast-notification/dist/theme-bootstrap.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ToastPlugin)
app.use(router)

app.mount('#app')
