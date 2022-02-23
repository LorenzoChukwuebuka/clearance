<template>
  <main>
    <adminnav msg="Admin Dashboard" />
    <deptcomponent  />
  </main>
</template>

<script>
import deptcomponent from '../../components/admin/dept/deptcomponent.vue'
import adminnav from '@/components/admin/adminnav.vue'
export default {
  name: 'departments',
  components: {
    deptcomponent,adminnav
  }
}
</script>

<style></style>
