<template>
  <header>
    <div class="header-container">
      <div
        class="logo-container"
        @click="headerClick()"
      >
        MORVERN
      </div>

      <div
        class="header-burger"
        @click="burgerClick()"
      />

      <div
        class="navigation-container"
        :class="{ 'mobile-menu-hidden': mobileMenuHidden }"
      >
        <div
          v-for="route in routes"
          class="navigation-item"
          :class="{ 'is-selected': isCurrentRoute(route) }"
          @click="headerClick(route)"
        >
          {{ route.name }}
        </div>
        <div
          class="navigation-item"
          @click="headerClick('merch')"
        >
          merch
        </div>
      </div>
    </div>
  </header>

  <main id="content">
    <div class="content-container fade-in">
      <RouterView v-slot="{ Component }">
        <transition
          :name="transitionType"
          mode="out-in"
        >
          <KeepAlive>
            <component :is="Component" />
          </KeepAlive>
        </transition>
      </RouterView>
    </div>
  </main>

  <footer>
    <div class="footer-container">
      <MorvIcons
        :icons="linkData[0]"
        size="small"
      />
      <div class="footer-copyright">
        © 2024 Morvern
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import JsonData from '@/components/JsonData.vue';

export default {
  mixins: [JsonData],

  data() {
    return {
      currentRouteName: '',
      transitionType: 'fade-transition',
      mobileMenuHidden: true,
    };
  },

  computed: {
    routes() {
      return this.$router.getRoutes();
    },

    isCurrentRoute() {
      return (route) => {
        return this.currentRouteName === route.name;
      };
    },
  },

  mounted() {
    const content = document.querySelector('.content-container');
    setTimeout(() => {
      content.classList.remove('fade-in');

      if (this.$router.currentRoute._value.name) {
        this.currentRouteName = this.$router.currentRoute._value.name;
      } else {
        this.currentRouteName = 'home';
      }
    }, 100);
  },

  methods: {
    headerClick(route = null) {
      if (route === 'merch') {
        window.open('https://morvern.bandcamp.com/merch', '_blank');
      }

      if (!route) {
        route = this.routes.find((x) => x.name === 'home');
      }

      this.mobileMenuHidden = true;

      if (this.currentRouteName === route.name) {
        return;
      }

      const currentRoute = this.routes.find((x) => x.name === this.currentRouteName);
      this.transitionType = 
        (this.routes.indexOf(currentRoute) < this.routes.indexOf(route))
          ? 'slide-left-transition' : 'slide-right-transition';

      this.$router.push(route.path);
      this.currentRouteName = route.name;

      setTimeout(() => {
        const contentContainer = document.querySelector('.content-container');
        contentContainer.scrollTo(0, 0);
      }, 100);
    },

    burgerClick() {
      this.mobileMenuHidden = !this.mobileMenuHidden;
    },
  },
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  background: black;
  border-bottom: 2px solid grey;
  font-weight: bold;
  line-height: 1.5;
  color: white;
  .header-container {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 30px;
    max-width: 1440px;
    margin: auto;

    .logo-container {
      cursor: pointer;
      height: 50px;
      flex: 0 0 185px;
      margin: 5px 10px;
      padding: 0px 10px;
      border-radius: 10px;
      font-size: 2rem;
      font-style: italic;
      font-weight: 900;
      .shine-effect();
    }

    .header-burger {
      display: none;
    }

    .navigation-container {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      padding-left: 20px;

      .navigation-item {
        cursor: pointer;
        margin: auto;
        height: 45px;
        padding: 10px 20px;
        border-left: 1px solid grey;
        text-align: center;
        color: var(--color-text);
        transition: color 0.5s;
        &:last-child {
          border-right: 1px solid grey;
        }
        &:hover {
          color: white;
        }
        &.is-selected {
          color: white;
        }
        .shine-effect();
      }
    }
  }
}


#content {
  position: relative;
  overflow: hidden;
  background-image: url('@/assets/bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .content-container {
    overflow: scroll;
    width: 100%;
    height: 100%;
    padding: 50px;
    background: radial-gradient(fade(black, 70%), fade(black, 90%));
    -webkit-transition: background 1s ease;
    transition: background 1s ease;
    &.fade-in {
      background: black;
    }
  }
}


footer {
  background: black;
  border-top: 2px solid grey;
  .footer-container {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    max-width: 1440px;
    margin: auto;
  }
}


@media (width <= 800px) {
  header {
    .header-container {
      position: relative;
      padding: 5px 10px;
      background: black;

      .header-burger {
        display: initial;
        position: absolute;
        top: 20px;
        right: 25px;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 2px solid grey;

        &:before {
          display: block;
          content: '';
          position: relative;
          height: calc(100% - 10px);
          width: calc(100% - 10px);
          top: 5px;
          left: 5px;
          background-color: grey;

          -webkit-mask-position: center;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          -webkit-mask-image: url('@/assets/icons/burgermenu.svg');

          mask-position: center;
          mask-repeat: no-repeat;
          mask-size: contain;
          mask-image: url('@/assets/icons/burgermenu.svg');
        }
      }

      .navigation-container {
        position: absolute;
        z-index: 1;
        top: 70px;
        left: 0;
        right: 0;
        padding: 5px;
        background: black;
        border-bottom: 2px solid grey;
        max-height: 105px;
        overflow: hidden;
        transition-property: max-height, padding;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;

        .navigation-item {
          flex: 0 0 15%;
          &:first-child {
            border-left: none;
          }
          &:last-child {
            border-right: none;
          }
        }
        &.mobile-menu-hidden {
          max-height: 0px;
          padding: 0px 5px;
        }
      }
    }
  }

  #content {
    .content-container {
      padding: 25px;
    }
  }

  footer {
    .footer-container {
      padding: 15px 25px;
    }
  }
}


@media (width <= 600px) {
  header {
    .header-container {
      .navigation-container {
        .navigation-item {
          flex: 0 0 33%;
          border: none;
          &:last-child {
            border: none;
          }
        }
      }
    }
  }

  #content {
    background-image: url('@/assets/bgm.jpg');
    .content-container {
      background: radial-gradient(fade(black, 60%), fade(black, 80%));
      main {
        overflow: scroll;
      }
    }
  }

  footer {
    .footer-container {
      padding: 5px;
      flex-wrap: wrap;
      div {
        flex: 0 0 100%;
        justify-content: center;
        text-align: center;
      }
    }
  }
}
</style>
