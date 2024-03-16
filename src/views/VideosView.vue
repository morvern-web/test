<template>
  <main class="video-container">
    <!-- {{ videoData }} -->
    <div class="video-grid">
      <div
        v-for="video in videoData"
        class="video-entry"
      >
        <div
          class="video-artwork"
          :class="[
            getClass(video.title),
            { 'selected': isSelected(video) }
          ]"
          @click="videoClick(video)"
        />
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
    getClass() {
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
  width: 100%;
  max-width: 1440px;
  margin: auto;

  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    grid-template-rows: repeat(auto-fit, 205px);
    grid-column-gap: 50px;
    grid-row-gap: 100px;
    padding-bottom: 50px;

    .video-entry {
      width: 360px;
      height: 205px;
      .video-artwork {
        cursor: pointer;
        height: 100%;
        width: 100%;
        border-radius: 20px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        .shine-effect();
      }
      .video-title {
        text-align: center;
        font-size: 1.1rem;
        color: white;
      }
    }
  }
}


.video-artwork {
  &.alteredstates {
    background-image: url('@/assets/videos/alteredstates.jpg');
  }
  &.braindeadlivefromthehomeoffreedom {
    background-image: url('@/assets/videos/braindead.jpg');
  }
  &.brokenbackjohnny {
    background-image: url('@/assets/videos/brokenbackjohnny.jpg');
  }
  &.coolcat {
    background-image: url('@/assets/videos/coolcat.jpg');
  }
  &.die {
    background-image: url('@/assets/videos/die.jpg');
  }
  &.hersmile {
    background-image: url('@/assets/videos/hersmile.jpg');
  }
  &.mcpekarna {
    background-image: url('@/assets/videos/mcpekarna.jpg');
  }
  &.morphose {
    background-image: url('@/assets/videos/morphose.jpg');
  }
  &.morvernlive {
    background-image: url('@/assets/videos/morvernlive.jpg');
  }
  &.morvernxfriendscompilation {
    background-image: url('@/assets/videos/morvernxfriends.jpg');
  }
  &.seaoflovecover {
    background-image: url('@/assets/videos/seaoflove.jpg');
  }
  &.sleepyhead {
    background-image: url('@/assets/videos/sleepyhead.jpg');
  }
  &.thestand {
    background-image: url('@/assets/videos/thestand.jpg');
  }
  &.time {
    background-image: url('@/assets/videos/time.jpg');
  }
  &.weirddreams {
    background-image: url('@/assets/videos/weirddreams.jpg');
  }
}
</style>
