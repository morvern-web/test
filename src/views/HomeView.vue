<template>
  <main>
    <div class="home-title">
      {{ news[0]?.title?.toUpperCase() }}
    </div>

    <div
      v-html="news[0]?.text"
      class="home-text"
    />
  </main>
</template>

<script>
import jsonData from '@/components/jsonData.vue';

export default {
  mixins: [jsonData],
};
</script>

<style lang="less" scoped>
main {
  height: 100%;
  max-width: 1440px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  .home-date, .home-title, .home-text {
    text-align: center;
  }

  .home-title {
    padding: 20px 0px 50px;
    font-size: 3rem;
    font-weight: bold;
  }

  .home-text {
    padding: 0px 25%;
    font-size: 1.2rem;
  }
}
</style>
