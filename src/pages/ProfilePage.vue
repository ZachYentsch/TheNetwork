<template>
  <div class="row">
    <div v-if="profile.id == account.id">
      <EditProfile />
    </div>
    <div>
      <CreatePost />
    </div>
    <div class="mt-3">
      <h1>Profile Page</h1>
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
</template>


<script>
import { computed, watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { postsService } from "../services/PostsService";
import { profilesService } from "../services/ProfilesService";
import { AppState } from "../AppState";
export default {
  setup() {
    const route = useRoute();
    watchEffect(async () => {
      if (route.name == "Profile") {
        await profilesService.getProfile(route.params.id);
        await postsService.getAllPosts("?creatorId=" + route.params.id);
      }
    });
    return {
      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      profile: computed(() => AppState.profile),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>