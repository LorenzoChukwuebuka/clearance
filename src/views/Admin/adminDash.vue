<template>
  <main>
    <adminnav msg="Admin Dashboard" />
    <adminDashComponent :admins="admins" :students="students" :depts="depts" />
  </main>
</template>

<script>
import adminDashComponent from '@/components/admin/adminDashComponent.vue'
import adminnav from '@/components/admin/adminnav.vue'
export default {
  name: 'adminDash',
  components: {
    adminDashComponent,
    adminnav
  },
  data () {
    return {
      admins: '',
      depts: '',
      students: ''
    }
  },
  created () {
    this.getAdmins()
    this.getDepts()
    this.getStudent()
  },
  methods: {
    getAdmins () {
      this.$http.get('http://localhost:8000/api/v1/totalAdmins').then(res => {
        this.admins = res.data[0].total_admins
      })
    },
    getDepts () {
      this.$http.get('http://localhost:8000/api/v1/totalDepts').then(res => {
        this.depts = res.data[0].total_depts
      })
    },
    getStudent () {
      this.$http.get('http://localhost:8000/api/v1/totalStudents').then(res => {
        this.students = res.data[0].total_students
      })
    }
  }
}
</script>

<style></style>
