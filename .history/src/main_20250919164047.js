// Import Vue core
import { createApp } from 'vue'

// Import root component and router
import App from './App.vue'
import router from './router/index.js'

// Import Bootstrap and BootstrapVueNext
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createBootstrap } from 'bootstrap-vue-next'

// Create app
const app = createApp(App)

// Use router and BootstrapVue
app.use(router)
app.use(createBootstrap())

// Mount the app
app.mount('#app')
