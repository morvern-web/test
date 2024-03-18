<template>
  <main class="music-container">
    <div class="music-grid">
      <div
        v-for="album in musicData"
        class="album-entry"
      >
        <img
          :src="`src/assets/music/${getSrc(album.title)}.jpg`"
          class="album-artwork"
          @click="albumClick(album)"
        />
      </div>
    </div>

    <transition name="fade-in">
      <div
        v-if="selectedAlbum"
        class="album-overlay-container"
      >
        <MrvAlbum
          :album="selectedAlbum"
          @closeOverlay="selectedAlbum = null"
        />
      </div>
    </transition>
  </main>
</template>

<script>
import jsonData from '@/components/jsonData.vue';

export default {
  mixins: [jsonData],

  data() {
    return {
      selectedAlbum: null,
    };
  },

  computed: {
    getSrc() {
      return (title) => {
        return title.toLowerCase().replaceAll(' ', '').replace(/[.,'()0-9]/g, '');
      };
    },

    isSelected() {
      return (album) => album === this.selectedAlbum;
    },
  },

  methods: {
    albumClick(album) {
      if (this.isSelected(album)) {
        this.selectedAlbum = null;
      } else {
        this.selectedAlbum = album;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.music-container {
  max-width: 1280px;
  margin: auto;

  .music-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;

    .album-entry {
      cursor: pointer;
      width: fit-content;
      height: fit-content;
      overflow: hidden;
      border-radius: 20px;
      .shine-effect();

      .album-artwork {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
