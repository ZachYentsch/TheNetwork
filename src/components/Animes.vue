<template>
  <div class="mx-5">
    <img :src="anime.tall" alt="" width="225" />
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