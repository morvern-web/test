<template />

<script>
export default {
  methods: {
    getImgSrc(img, type = 'music') {
      const filename =
        `${img.toLowerCase().replaceAll(' ', '').replace(/[.,'()0-9]/g, '')}.jpg`;

      const path = (type === 'video')
        ? `../assets/videos/${filename}`
        : `../assets/${type}/${filename}`;

      const modules = import.meta.glob('../assets/*/*', { eager: true });

      return modules[path].default;
    },
  },
};
</script>
