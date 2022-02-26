<template>
  <main>
    <adminnav msg="Admin Dashboard" />
    <adminDashComponent />
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
    return {}
  },
  created () {
	  this.getAdmins()
  },
  methods: {
    getAdmins () {
      this.$http.get('http://localhost:8000/api/v1/totalAdmins').then(res => {
        console.log(res.data)
      })
    },
	getDepts(){

	}
  }
}
</script>

<style></style>
