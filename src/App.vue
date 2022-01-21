<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <!-- <SideBar /> -->
        </div>
      </div>
    </div>
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
