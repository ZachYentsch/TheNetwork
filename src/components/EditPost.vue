<template>
  <form @submit.prevent="editPost()">
    <div class="row bg-dark justify-content-center m-3">
      <div class="col-md-8 m-3">
        <label for="Image">Image Url:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Image..."
          v-model="editable.imgUrl"
          required
        />
      </div>
      <div class="col-md-8 m-3">
        <label for="Caption">Caption: </label>
        <input
          type="text"
          class="form-control"
          placeholder="Caption..."
          v-model="editable.body"
          required
        />
      </div>
      <button class="btn btn-primary">Create Post</button>
    </div>
  </form>
</template>


<script>
import { watchEffect } from "@vue/runtime-core";
import { Post } from "../models/Post";
import { postsService } from "../services/PostsService";
export default {
  props: {
    post: { type: Post, defualt: () => new Post() },
  },
  setup(props) {
    const editable = ref({});
    watchEffect(() => {
      editable.value = { ...props.post };
    });
    return {
      editable,
      async editPost() {
        try {
          await postsService.editPost(editable.value);
          Modal.getOrCreateInstance(
            document.getElementById("edit-modal")
          ).hide();
        } catch (error) {}
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>