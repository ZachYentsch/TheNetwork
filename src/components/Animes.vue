<template>
  <div>
    <img :src="anime.tall" alt="" />
    <img :src="anime.tall" alt="" />
  </div>
</template>


<script>
export default {
  props: {
    anime: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>