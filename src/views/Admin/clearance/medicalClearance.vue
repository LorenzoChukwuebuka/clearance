<template>
  <main>
    <adminnav msg="Admin Dashboard" />
    
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
export default{
    name:"medicalClearance",
    components:{
        adminnav,
    },
}
</script>