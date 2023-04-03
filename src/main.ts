import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Header from './views/Header/header_index.vue';
import Footer from './views/Footer/footer-index.vue'




const app = createApp(App);

app.component('app-Header', Header);
app.component('app-footer', Footer);

app.use(store).use(router);
app.mount('#app');
// createApp(App).use(store).use(router).mount('#app')
