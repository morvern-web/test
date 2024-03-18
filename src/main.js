import '@/assets/main.css';

import { createApp } from 'vue';
import VueDayjs from 'vue3-dayjs-plugin'

import App from './App.vue';
import router from './router';

import MorvAlbum from './components/MorvAlbum.vue';
import MorvAlbumEmbed from './components/MorvAlbumEmbed.vue';
import MorvIcons from './components/MorvIcons.vue';
import MorvOverlay from './components/MorvOverlay.vue';
import MorvVideo from './components/MorvVideo.vue';

const app = createApp(App);

app.use(router);
app.use(VueDayjs);

app
  .component('MorvAlbum', MorvAlbum)
  .component('MorvAlbumEmbed', MorvAlbumEmbed)
  .component('MorvIcons', MorvIcons)
  .component('MorvOverlay', MorvOverlay)
  .component('MorvVideo', MorvVideo);

app.mount('#app');
