import '@/assets/main.css';

import { createApp } from 'vue';
import VueDayjs from 'vue3-dayjs-plugin'

import App from './App.vue';
import router from './router';

import MrvAlbum from './components/MrvAlbum.vue';
import MrvAlbumEmbed from './components/MrvAlbumEmbed.vue';
import MrvIcons from './components/MrvIcons.vue';
import MrvOverlay from './components/MrvOverlay.vue';
import MrvVideo from './components/MrvVideo.vue';

const app = createApp(App);

app.use(router);
app.use(VueDayjs);

app
  .component('MrvAlbum', MrvAlbum)
  .component('MrvAlbumEmbed', MrvAlbumEmbed)
  .component('MrvIcons', MrvIcons)
  .component('MrvOverlay', MrvOverlay)
  .component('MrvVideo', MrvVideo);

app.mount('#app');
