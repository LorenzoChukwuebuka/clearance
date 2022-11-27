<template>
  <main>
    <studentnav msg="Student Dashbooard" />
    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Upload Departmental Due Receipts</h4>
      <addlibrary />
      <div class="row justify-content-center mt-5">
        <div class="container col-8">
          <div class="bg-dark" v-if="success.length">
            <span v-for="(suc, index) in success" :key="index">
              <b-alert show variant="danger" dismissible>
                {{ suc }}
              </b-alert>
            </span>
          </div>
          <!-- <getlibrary :deptDues="deptDues" /> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import studentnav from "../../components/student/studentnav.vue";
import getlibrary from "../../components/student/libraryfees/getlibraryfees.vue";
import addlibrary from "../../components/student/libraryfees/addlibraryclearance.vue"
 
export default {
  name: "uploadLibrary",
  components: {
    getlibrary,
    studentnav,
    addlibrary
  },
  data() {
    return {
      success:[]
    };
  },
  methods: {
    getlibrary() {
        
    },
  },
};
</script>

<style></style>
