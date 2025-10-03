import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createBootstrap } from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

//import bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'

//create app
const app = createApp(App)

// import app  and router component
import App from './App.vue'
import router from './router'

// use Pinia, router and bootstrap
app.use(pinia)
app.use(router)
app.use(createBootstrap())

createApp(App).mount('#app')
