<template>
  <main class="music-container">
    <div v-for="album in musicData">
      <div
        class="album-artwork"
        :class="[
          getClass(album.title),
          { 'selected': isSelected(album) }
        ]"
        @click="albumClick(album)"
      />
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
    getClass() {
      return (title) => {
        return title.toLowerCase().replaceAll(' ', '').replace(/[.,'()]/g, '');
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
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 75px;

  .album-artwork {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .shine-effect();
  }
}

.music-container::before {
  content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}
.music-container > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.album-artwork {
  &.captaintrips {
    background-image: url('@/assets/music/captaintrips.jpg');
  }
  &.celicalive23 {
    background-image: url('@/assets/music/celicalive23.jpg');
  }
  &.kingtoro {
    background-image: url('@/assets/music/kingtoro.jpg');
  }
  &.livefromthehomeoffreedom {
    background-image: url('@/assets/music/livefromthehomeoffreedom.jpg');
  }
  &.welcometohell {
    background-image: url('@/assets/music/welcometohell.jpg');
  }  
}
</style>
