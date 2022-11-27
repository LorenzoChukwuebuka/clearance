<template>
    <main>
    <studentnav msg="Student Dashbooard" />
    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Upload Departmental Due Receipts</h4>
      <addDeptdues />
      <div class="row justify-content-center mt-5">
        <div class="container col-8">
          <div class="bg-dark" v-if="success.length">
            <span v-for="(suc, index) in success" :key="index">
              <b-alert show variant="danger" dismissible>
                {{ suc }}
              </b-alert>
            </span>
          </div>
          <fetchdeptDues :deptDues="deptDues" />
        </div>
      </div>
    </div>
  </main>
  
</template>

<script>
import studentnav from "../../components/student/studentnav.vue";

export default {
name:"uploadMedical"

}
</script>

<style>

</style>