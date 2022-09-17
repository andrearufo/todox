import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import './assets/style.scss'

const app = createApp(App)

app.use(createPinia())
app.use(autoAnimatePlugin)

app.mount('#app')

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
    onNeedRefresh() { },
    onOfflineReady() { },
})
