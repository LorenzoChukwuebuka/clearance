<template>
  <main>
    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Add Department</h4>
      <addDept :schools="schools" @form="getForm" />

      <div class="row justify-content-center mt-5">
        <div class="container col-8 ">
          <div class=" bg-dark" v-if="success.length">
            <span v-for="(suc,index) in success" :key="index">
              <b-alert show variant="danger" dismissible>
                {{ suc }}
              </b-alert>
            </span>
          </div>

          <fetchdeptComponent
            :depts="depts"
            @Id="delDept"
            :schools="schools"
            @edit="updateDept"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import addDept from '@/components/admin/dept/addDeptComponent.vue'
import fetchdeptComponent from '@/components/admin/dept/fetchDept.vue'

export default {
  name: 'deptcomponent',
  components: {
    addDept,
    fetchdeptComponent
  },
  data () {
    return {
      schools: [],
      depts: [],
      success: []
    }
  },
  mounted () {
    this.getSchool()
    this.getDept()
  },
  methods: {
    getSchool () {
      this.$http.get('http://localhost:8000/api/v1/school').then(res => {
        this.schools = res.data
      })
    },
    getForm (form) {
      this.$http
        .post('http://localhost:8000/api/v1/Dept', form)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getDept () {
      this.$http
        .get('http://localhost:8000/api/v1/Dept')
        .then(res => {
          this.depts = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    delDept (Id) {
      this.$http
        .delete(`http://localhost:8000/api/v1/Dept/${Id}`)
        .then(res => {
          this.success.push(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateDept (edit) {
      this.$http
        .put(`http://localhost:8000/api/v1/Dept/${edit.id}`, edit)
        .then(res => {
          console.log(res.data)
        })
    }
  }
}
</script>

<style></style>
