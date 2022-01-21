<template>
  <div
    class="col-md-2 d-md-flex flex-column justify-content-between bg-primary"
    style="height: 75vh"
  >
    <div class="py-3 align-items-center">
      <img :src="user.picture" alt="" height="60" class="rounded" />
      <h4>{{ user.name }}</h4>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>