import './styles/index.styl'
import './assets/main.styl'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Demo from './components/Demo'
import Button from './components/button/Button'
import Pagination from './components/pagination/Pagination'
import Tabs from './components/tabs/Tabs'
import TabPane from './components/tabs/TabPane'
import Icon from './components/icon/Icon'
import Tooltip from './components/tooltip/Tooltip'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component(Demo.name, Demo)

app.component(Button.name, Button)
app.component(Icon.name, Icon)
app.component(Tabs.name, Tabs)
app.component(TabPane.name, TabPane)
app.component(Pagination.name, Pagination)
app.component(Tooltip.name, Tooltip)

app.mount('#app')
