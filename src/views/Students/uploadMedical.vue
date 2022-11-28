<template>
  <main>
    <studentnav msg="Student Dashbooard" />
    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Upload Medical Receipts</h4>
      <addmedical />
      <div class="row justify-content-center mt-5">
        <div class="container col-12">
          <div class="bg-dark" v-if="success.length">
            <span v-for="(suc, index) in success" :key="index">
              <b-alert show variant="danger" dismissible>
                {{ suc }}
              </b-alert>
            </span>
          </div>
          <getmedical :medical="medical" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import studentnav from "../../components/student/studentnav.vue";
import addmedical from "../../components/student/medical/addmedicalclearance.vue";
import getmedical from "../../components/student/medical/fetchmedicalupload.vue";

export default {
  name: "uploadMedical",
  components: {
    addmedical,
    studentnav,
    getmedical,
  },
  data() {
    return {
      success: [],
      medical: [],
    };
  },
  mounted() {
    this.getlibrary();
  },
  methods: {
    async getlibrary() {
      try {
        let response = await this.$http.get(
          `http://localhost:8000/api/v1/medical_clearance/${this.$id}`
        );
         this.medical = response.data
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
