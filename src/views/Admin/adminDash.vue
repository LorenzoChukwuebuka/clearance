<template>
  <main>
    <adminnav msg="Admin Dashboard"/>
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
  }
}
</script>

<style></style>
