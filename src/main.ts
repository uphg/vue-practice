import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './styles/index.styl'
import './assets/main.styl'
import Demo from './components/Demo'
import Pagination from './components/pagination/Pagination'
import Tabs from './components/tabs/Tabs'
import TabPane from './components/tabs/TabPane'
import Icon from './components/icon/Icon'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component(Demo.name, Demo)

app.component(Icon.name, Icon)
app.component(Tabs.name, Tabs)
app.component(TabPane.name, TabPane)
app.component(Pagination.name, Pagination)

app.mount('#app')
