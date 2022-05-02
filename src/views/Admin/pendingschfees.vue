<template>
  <main>
    <adminnav msg="Admin Dashboard" />

    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Pending School Fees</h4>

      <div class="row justify-content-center mt-5"></div>
    </div>
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
import approvependingschfees from "../../components/admin/students/approvependingschfees.vue";
export default {
  name: "pendingschfees",
  components: {
    adminnav,
    approvependingschfees,
  },
};
</script>
