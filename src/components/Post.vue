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
        <span><i class="mdi mdi-heart"></i></span>
      </div>
    </div>
  </div>
</template>


<script>
import { useRouter } from "vue-router";
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
      router,
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