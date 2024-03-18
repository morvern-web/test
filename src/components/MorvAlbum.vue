<template>
  <MorvOverlay @closeOverlay="$emit('closeOverlay')">
    <template v-slot:default>
      <div class="album-container">
        <div class="album-artwork-container">
          <img
            class="album-artwork"
            :src="getImgSrc(album.title)"
          />
          <MorvIcons
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

              <MorvAlbumEmbed
                v-else
                :album="album"
                :selectedOption="selectedOption"
              />
            </transition>
          </div>
        </div>
      </div>
    </template>
  </MorvOverlay>
</template>

<script>
import MediaMixin from '@/components/MediaMixin.vue';

export default {
  name: 'MorvAlbum',

  mixins: [MediaMixin],

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
  height: 100%;
  .album-artwork-container {
    .album-artwork {
      object-fit: contain;
      height: calc(100% - 52px);
      border-radius: 20px;
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
      margin-bottom: 1rem;
      .album-title {
        margin-right: 25px;
        font-size: 1.6rem;
        font-weight: 900;
        color: white;
      }
      .album-details {
        font-size: 1.1rem;
      }
    }
    .album-info {
      overflow-y: scroll;
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
</style>
