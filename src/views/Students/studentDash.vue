<template>
  <main>
      <studentnav msg="Student Dashbooard"/>
      <studentdashComponent/>
    
  </main>
</template>
<script>
import studentnav from '@/components/student/studentnav.vue'
import studentdashComponent from '@/components/student/studentdashcomp.vue'
export default {
  name: 'studentdash',
  components:{
      studentnav,studentdashComponent
  }
}
</script>
