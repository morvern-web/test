<template />

<script>
export default {
  data() {
    return {
      news: [],
      music: [],
      live: [],
      photos: [],
      videos: [],
      links: [],
    };
  },

  mounted() {
    Object.keys(this.$data).forEach((i) => {
      this.getData(i);
    });
  },

  methods: {
    getData(type) {
      const json = (type === 'music')
        ? import.meta.glob('../content/music/*.json')
        : (type === 'live')
          ? import.meta.glob('../content/live/*.json')
          : (type === 'videos')
            ? import.meta.glob('../content/videos/*.json')
            : (type === 'links')
              ? import.meta.glob('../content/links.json')
              : import.meta.glob('../content/news/*.json');

      for (const path in json) {
        json[path]().then((mod) => {
          this[type].push({ ...mod });
          this[type].sort((a, b) => {
            return (a.date < b.date) ? 1 : (a.date > b.date) ? -1 : 0;
          });
        });
      }
    },
  },
};
</script>
