<template>
  <MrvOverlay @closeOverlay="$emit('closeOverlay')">
    <template v-slot:default>
      <div class="album-container">
        <div class="album-artwork-container">
          <div
            class="album-artwork"
            :class="getClass(album.title)"
          />
          <MrvIcons
            :icons="albumOptions(album)"
            :selected="selectedOption"
            @click="optionClick"
          />
        </div>

        <div class="album-info-container">
          <div class="album-title-container">
            <div class="album-title">
              {{ album.title }}
            </div>
            <div class="album-details">
              <span>{{ $date(album.date).format('DD MMMM YYYY') }}</span>
              <span v-if="album.label"> - {{ album.label }}</span>
              <span v-if="album.catNumber"> - {{ album.catNumber }}</span>
            </div>
          </div>

          <div class="album-info">
            <transition
              name="fade-transition"
              mode="out-in"
            >
              <div
                v-if="selectedOption === 'tracklist'"
                class="album-tracklist-container"
              >
                <ol class="album-tracklist">
                  <li v-for="track in album.tracklist">
                    {{ track }}
                  </li>
                </ol>
              </div>

              <div
                v-else-if="selectedOption === 'credits'"
                class="album-credits-container"
              >
                <ul
                  v-if="album.credits.band"
                  class="album-credits-band"
                >
                  <li v-for="credit in album.credits.band">
                    <span class="credits-name">{{ credit.split('-')[0] }}</span>
                    <span>- {{ credit.split('-')[1] }}</span>
                  </li>
                </ul>
                <ul
                  v-if="album.credits.other"
                  class="album-credits-other"
                >
                  <li v-for="credit in album.credits.other">
                    {{ credit }}
                  </li>
                </ul>
              </div>

              <MrvAlbumEmbed
                v-else
                :album="album"
                :selectedOption="selectedOption"
              />
            </transition>
          </div>
        </div>
      </div>
    </template>
  </MrvOverlay>
</template>

<script>
export default {
  name: 'MrvAlbum',

  props: {
    album: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      selectedOption: 'tracklist',
    };
  },

  computed: {
    getClass() {
      return (title) => {
        return title.toLowerCase().replaceAll(' ', '').replace(/[.,'()]/g, '');
      };
    },

    albumOptions() {
      return (album) => {
        const options = ['bandcamp', 'spotify', 'applemusic', 'deezer'];
        return ['tracklist', 'credits'].concat(
          Object.keys(album).filter((key) => options.includes(key))
            .sort((a, b) => options.indexOf(a) - options.indexOf(b))
        );
      };
    },
  },

  methods: {
    optionClick(option) {
      if (typeof option !== 'string') {
        return;
      }
      this.selectedOption = option;
    },
  },
};
</script>

<style lang="less" scoped>
.album-container {
  display: flex;
  .album-artwork-container {
    flex: 0 0 450px;
    .album-artwork {
      height: 450px;
    }
  }

  .album-info-container {
    position: relative;
    padding-left: 25px;
    border-left: 2px solid grey;
    margin-left: 25px;
    flex: 1 0 0%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .album-title-container {
      margin-bottom: 1.5rem;
      .album-title {
        font-size: 1.6rem;
        font-weight: 900;
        color: white;
      }
      .album-details {
        font-size: 1.1rem;
      }
    }
    .album-info {
      flex: 1 0 0%;
      width: 100%;
      font-size: 1.1rem;
      .album-tracklist-container {
        color: white;
        .album-tracklist {
          padding-left: 2rem;
          li {
            font-weight: bold;
            &::marker {
              font-weight: normal;
              color: var(--color-text);
            }
          }
        }
      }
      .album-credits-container {
        .album-credits-band {
          padding-left: 1rem;
          margin-bottom: 1.5rem;
          .credits-name {
            font-weight: bold;
            color: white;
          }
        }
        .album-credits-other {
          list-style: none;
          padding-left: 0px;
        }
      }
    }
  }
}

.album-artwork {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

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
