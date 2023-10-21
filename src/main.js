import { createApp } from 'vue'
import '../scss/general.scss'
import App from './App.vue'
import { router } from './router'

createApp(App)
.use(router)
.mount('#app')

