<template>
  <main>
    <adminnav msg="Admin Dashboard" />
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
export default {
  name: "libraryClearance",
  components: {
    adminnav,
  },
  mounted() {
    this.getClearance();
  },
  data() {
    return {
      clearance: [],
      loading: true,
    };
  },
  methods: {
    getClearance() {
      this.$http
        .get("http://localhost:8000/api/v1/getAllstudents")
        .then((response) => {
          if (response.data.message == "All students") {
            console.log(response.data.data);
          }

          // this.clearance = response.body.data;
          this.loading = false;
        });
    },
  },
};
</script>
