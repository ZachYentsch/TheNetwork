<template>
  <div class="col-md-8 m-3">
    <div
      class="card-lg bg-dark border-primary border-4 mb-3"
      style="max-width: 18rem"
    >
      <div
        class="card-header d-flex justify-content-around selectable"
        @click="goToProfile()"
      >
        <img :src="post.creator.picture" alt="userImg" height="45" />
        <h5 class="p-2">{{ post.creator.name }}</h5>
      </div>
      <div class="card-body">
        <img :src="post.imgUrl" alt="" class="img-fluid" />
        <p class="card-text m-3">{{ post.body }}</p>
      </div>
      <div class="card-footer d-flex justify-content-around">
        <div class="text-center"><small>2 hours ago</small></div>
        <span
          ><i class="mdi mdi-heart"></i>
          <p>1</p></span
        >
        <span
          ><i
            v-if="post.creatorId == account.id"
            @click="removePost()"
            class="mdi mdi-trash-can selectable"
          ></i
          ><i
            v-if="post.creatorId == account.id"
            date-bs-toggle="modal"
            data-bs-target="#edit-modal"
            class="mdi mdi-pencil selectable"
          ></i
        ></span>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    return {
      account: computed(() => AppState.account),
      router,
      // REVIEW Why does this work only work on refresh
      async removePost() {
        try {
          await postsService.removePost(props.post.id);
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.log(error.message);
        }
      },
      async editPost() {
        try {
          await postsService.editPost(props.post);
        } catch (error) {
          logger.log(error.message);
          Pop.toast(error.message, "error");
        }
      },
      async goToProfile() {
        router.push({
          name: "Profile",
          params: { id: props.post.creator.id },
        });
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>