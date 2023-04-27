import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toaster from '@meforma/vue-toaster'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


import Header from './views/Header/header-index.vue';
import Footer from './views/Footer/footer-index.vue';
import Loading from './components/tools/loader.vue';




const app = createApp(App);

app.component('app-Header', Header);
app.component('app-Footer', Footer);
app.component('app-Loader', Loading);

app.use(store)
    .use(Toaster)
    .use(router);
app.mount('#app');
// createApp(App).use(store).use(router).mount('#app')
