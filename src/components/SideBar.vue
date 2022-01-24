<template>
  <div
    class="col-md-2 d-md-flex flex-column justify-content-between bg-primary"
    style="height: 75vh"
  >
    <div class="align-items-center mt-2">
      <img :src="profile.coverImg" alt="" height="100" />
      <img :src="profile.picture" alt="" height="60" class="rounded" />
      <h5>{{ profile.name }}</h5>
      <p>
        <small>{{ profile.email }}</small>
      </p>
      <a :href="profile.github" class="text-dark selectable p-2 mt-2"
        ><strong>Github Account</strong></a
      >
      <a :href="profile.linkedin" class="text-dark selectable p-2 mt-2"
        ><strong>Linked In Account</strong></a
      >
      <p>{{ profile.class }}</p>
      <p>{{ profile.bio }}</p>
      <p>Graduated:</p>
      <p>{{ profile.graduated }}</p>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      profile: computed(() => AppState.profile),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>