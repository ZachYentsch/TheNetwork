<template>
  <div class="container-fluid">
    <div class="row">
      <CreatePost />
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
    <button
      class="btn btn-primary m-2 text-dark"
      v-for="p in totalPages"
      :key="p"
      @click="nextPage(p)"
    >
      {{ p }}
    </button>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import Post from "../components/Post.vue";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";
export default {
  name: "Home",
  setup() {
    const editable = ref("");
    onMounted(async () => {
      try {
        await postsService.getAllPosts();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.log(error);
      }
    });
    return {
      totalPages: computed(() => AppState.totalPages),
      posts: computed(() => AppState.posts),

      async nextPage(page) {
        try {
          await postsService.filterPosts(editable.value, page);
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.log(error.message);
        }
      },
    };
  },
};
</script>

<style scoped lang="scss">
</style>
