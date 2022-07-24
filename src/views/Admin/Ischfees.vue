<template>
  <main>
    <adminnav msg="Submission Review" />
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
export default {
  name: "ischfees",
  components: {
    adminnav,
  },
  data() {
    return {
      filename: null,
    };
  },
  created() {
    if (this.$route.query.year === undefined) {
      this.$route.push("/admindashboard");
    }
    this.filename = this.$route.query.year;
  },
};
</script>

<style></style>
