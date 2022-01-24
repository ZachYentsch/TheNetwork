<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 bg-primary">
          <SideBar />
        </div>
        <div class="col-md-6">
          <router-view />
        </div>
        <div class="col-md-3">
          <Animes v-for="a in animes" :key="a.title" :anime="a" />
        </div>
      </div>
    </div>
  </main>
  <footer></footer>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import Pop from "./utils/Pop";
import { animesService } from "./services/AnimesService";
import { logger } from "./utils/Logger";
export default {
  name: "App",
  setup() {
    onMounted(async () => {
      try {
        await animesService.getAnimes();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.log(error);
      }
    });
    return {
      animes: computed(() => AppState.animes),
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
