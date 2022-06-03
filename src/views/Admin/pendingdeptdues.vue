<template>
  <main>
    <adminnav msg="Admin Dashboard" />

    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Pending Departmental Dues</h4>

      <div class="row justify-content-center mt-5">
        <approvedeptdues />
      </div>
    </div>
  </main>
</template>

<script>
import approvedeptdues from "@/components/admin/students/approvependingdeptdues.vue";
export default {
  name: "pendingdeptdues",
  components: {
    approvedeptdues,
  },
  data() {},
  mounted() {},
  methods: {},
};
</script>
