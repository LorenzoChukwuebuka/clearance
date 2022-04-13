<template>
  <main>
    <studentnav msg="Student Dashbooard" />
    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Upload Departmental Due Receipts</h4>
      <addDeptdues/>
      <div class="row justify-content-center mt-5">
        <div class="container col-8 ">
          <div class=" bg-dark" v-if="success.length">
            <span v-for="(suc, index) in success" :key="index">
              <b-alert show variant="danger" dismissible>
                {{ suc }}
              </b-alert>
            </span>
          </div>
		 <fetchdeptDues :deptDues="deptDues"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
 import studentnav from "../../components/student/studentnav.vue"
 import addDeptdues from "../../components/student/deptdues/addDeptdues.vue"
 import fetchdeptDues from "../../components/student/deptdues/fetchdeptdues.vue"
export default {
  name: 'uploadDeptDues',
  components: {
   studentnav,addDeptdues,fetchdeptDues
  },
  data () {
    return {
      success: [],
      deptDues: []
    }
  },
  mounted () {
    this.getDeptDues()
  },
  methods: {
    getDeptDues () {
      this.$http
        .get(`http://localhost:8000/api/v1/deptDues/${this.$id}`)
        .then(res => {
          this.deptDues = res.data
		  console.log(this.schFees)
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style></style>
