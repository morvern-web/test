<template>
  <main class="music-container">
    <div class="music-grid">
      <div
        v-for="album in musicData"
        class="album-entry"
      >
        <img
          :src="getImgSrc(album.title)"
          class="album-artwork"
          @click="itemClick(album)"
        />
      </div>
    </div>

    <transition name="fade-in">
      <div
        v-if="selectedItem"
        class="album-overlay-container"
      >
        <MrvAlbum
          :album="selectedItem"
          @closeOverlay="selectedItem = null"
        />
      </div>
    </transition>
  </main>
</template>

<script>
import mediaData from '@/components/mediaData.vue';
import jsonData from '@/components/jsonData.vue';

export default {
  mixins: [mediaData, jsonData],
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
