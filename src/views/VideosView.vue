<template>
  <main class="video-container">
    <div class="video-grid">
      <div v-for="video in videoData">
        <div class="video-entry">
          <img
            :src="getImgSrc(video.title, 'video')"
            class="video-artwork"
            @click="itemClick(video)"
          />
        </div>
        <div class="video-title">
          {{ video.title }}
        </div>
      </div>
    </div>

    <transition name="fade-in">
      <div
        v-if="selectedItem"
        class="video-overlay-container"
      >
        <MrvVideo
          :id="selectedItem.id"
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
.video-container {
  max-width: 1280px;
  margin: auto;

  .video-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;

    .video-entry {
      cursor: pointer;
      overflow: hidden;
      border-radius: 20px;
      .shine-effect();

      .video-artwork {
        display: block;
        width: 100%;
      }
    }

    .video-title {
      text-align: center;
      font-size: 1.1rem;
      color: white;
    }
  }
}
</style>
