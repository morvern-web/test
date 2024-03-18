<template>
  <main class="video-container">
    <div class="video-grid">
      <div v-for="video in videoData">
        <div class="video-entry">
          <img
            :src="`src/assets/videos/${getSrc(video.title)}.jpg`"
            class="video-artwork"
            @click="videoClick(video)"
          />
        </div>
        <div class="video-title">
          {{ video.title }}
        </div>
      </div>
    </div>

    <transition name="fade-in">
      <div
        v-if="selectedVideo"
        class="video-overlay-container"
      >
        <MrvVideo
          :id="selectedVideo.id"
          @closeOverlay="selectedVideo = null"
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
      selectedVideo: null,
    };
  },

  computed: {
    getSrc() {
      return (title) => {
        return title.toLowerCase().replaceAll(' ', '').replace(/[.,'()0-9]/g, '');
      };
    },

    isSelected() {
      return (video) => video === this.selectedVideo;
    },
  },

  methods: {
    videoClick(video) {
      if (this.isSelected(video)) {
        this.selectedVideo = null;
      } else {
        this.selectedVideo = video;
      }
    },
  },
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
