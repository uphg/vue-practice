import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './styles/index.styl'
import './assets/main.styl'
import Demo from './components/Demo'
import Pagination from './components/pagination/Pagination'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component(Demo.name, Demo)
app.component(Pagination.name, Pagination)

app.mount('#app')
