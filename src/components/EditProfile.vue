<template>
  <form @submit.prevent="editProfile()">
    <div class="row justify-content-center align-items-center elevation-3 my-3">
      <div class="col-md-5 mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Name..."
          v-model="editable.name"
          required
        />
      </div>
      <div class="col-md-5 mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Github..."
          v-model="editable.github"
          required
        />
      </div>
      <div class="col-md-5 mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="LinkedIn..."
          v-model="editable.linkedin"
          required
        />
      </div>
      <div class="col-md-5 mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Class..."
          v-model="editable.class"
          required
        />
      </div>
      <div class="col-md-5 mb-2">
        <select name="graduated" id="graduated" required class="form-control">
          <option disabled selected value="">Please Choose One</option>
          <option>Yes, Graduated</option>
          <option>No Graduated</option>
        </select>
      </div>
      <div class="col-md-6 mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Profile Picture..."
          v-model="editable.picture"
          required
        />
      </div>
      <div class="col-md-6 mb-2">
        <input
          type="text"
          class="form-control"
          placeholder="Cover Image..."
          v-model="editable.coverImg"
          required
        />
      </div>
      <div class="col-12 mb-2">
        <textarea
          type="text"
          class="form-control"
          placeholder="Bio..."
          v-model="editable.bio"
          required
        />
      </div>
      <div class="col-12 d-flex justify-content-end">
        <button class="btn btn-success">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { profilesService } from "../services/ProfilesService";
export default {
  setup() {
    const editable = ref({});
    return {
      editable,
      async editProfile() {
        try {
          await profilesService.editProfile(editable.value);
          editable.value = {};
          Pop.toast("Profile Changed Successfully");
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.log(error);
        }
      },
    };
  },
};
</script>