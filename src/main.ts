import { createApp } from 'vue';
import App from '@/App.vue';
import authGuardService from '@/auth-guard';
import store from '@/store';
import '@/styles/index.less';

const app = createApp(App);

app
  .use(store)
  .use(authGuardService)
  .mount('#app');
