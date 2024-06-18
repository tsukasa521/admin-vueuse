import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';
import App from './App.vue'
import { router } from './router'
import SamplePanel from "./components/SamplePanel.vue";
import "./styles/main.css";
import './styles/shared.scss'


import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App)
app.component(SamplePanel.name || 'SamplePanel', SamplePanel)
app.use(TDesign)
app.use(router)
app.mount('#app')
