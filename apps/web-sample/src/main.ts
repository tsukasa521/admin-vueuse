import { createApp } from 'vue'
import ElementPlus from "element-plus";
import TDesign from 'tdesign-vue-next';
import App from './App.vue'
import { router } from './router'
import SamplePanel from "./components/SamplePanel.vue";
import "./styles/main.css";
import './styles/shared.scss'

import 'tdesign-vue-next/es/style/index.css';
import 'element-plus/dist/index.css'

const app = createApp(App)
app.component(SamplePanel.name || 'SamplePanel', SamplePanel)
app.use(TDesign)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
