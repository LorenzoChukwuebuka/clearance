<template>
  <main>
    <adminnav msg="Admin Dashboard" />

    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Add Student</h4>

      <addStudent @form="submitForm" :depts="depts" />

      <div class="row justify-content-center mt-5">
        <div class="container col-8 ">
        
          <fetchStudent
		  :success="success"
            @Id="delStudent"
            :students="students"
            :depts="depts"
            @Form="editStudent"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import adminnav from '../../components/admin/adminnav.vue'
import addStudent from '@/components/admin/student/addStudent.vue'
import fetchStudent from '@/components/admin/student/fetchStudent.vue'
export default {
  name: 'createStudent',
  components: {
    adminnav,
    addStudent,
    fetchStudent
  },
  data () {
    return {
      success: [],
      depts: [],
      students: []
    }
  },
  mounted () {
    this.getDepartment()
    this.getStudent()
  },
  methods: {
    submitForm (form) {
      this.$http
        .post('http://localhost:8000/api/v1/student', form)
        .then(res => {
          if (res.data.message === 'successfull') {
            this.success.push('Insert Successful')
          }
        })
    },
    getDepartment () {
      this.$http.get('http://localhost:8000/api/v1/Dept').then(res => {
        this.depts = res.data
      })
    },

    getStudent () {
      this.$http.get('http://localhost:8000/api/v1/student').then(res => {
        this.students = res.data
      })
    },
    delStudent (Id) {
      this.$http
        .delete(`http://localhost:8000/api/v1/student/${Id}`)
        .then(res => {
          console.log(res.data)
        })
    },
    editStudent (Form) {
      this.$http
        .put(`http://localhost:8000/api/v1/student/${Form.Id}`, Form)
        .then(res => {
          if (res.data.message === 'Updated!') {
            this.success.push(res.data.message)
            setTimeout(() => {
              window.location.reload()
            }, 2000)
          }
        })
    }
  }
}
</script>

<style></style>
