<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <button
          class="btn btn-primary m-2"
          v-for="o in oldestPages"
          :key="o"
          @click="nextPage(o)"
        >
          Older
        </button>
      </div>
      <CreatePost />
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
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
