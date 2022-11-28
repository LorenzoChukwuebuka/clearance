<template>
  <main>
    <studentnav msg="Student Dashbooard" />
    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Upload Library Receipts</h4>
      <addlibrary />
      <div class="row justify-content-center mt-5">
        <div class="container col-12">
          <div class="bg-dark" v-if="success.length">
            <span v-for="(suc, index) in success" :key="index">
              <b-alert show variant="danger" dismissible>
                {{ suc }}
              </b-alert>
            </span>
          </div>
          <getlibrary :library="library" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import studentnav from "../../components/student/studentnav.vue";
import getlibrary from "../../components/student/libraryfees/getlibraryfees.vue";
import addlibrary from "../../components/student/libraryfees/addlibraryclearance.vue";

export default {
  name: "uploadLibrary",
  components: {
    getlibrary,
    studentnav,
    addlibrary,
  },
  data() {
    return {
      success: [],
      library: [],
    };
  },
  mounted() {
    this.getlibrary();
  },
  methods: {
    async getlibrary() {
      try {
        let response = await this.$http.get(
          `http://localhost:8000/api/v1/library_clearance/${this.$id}`
        );

        this.library = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
