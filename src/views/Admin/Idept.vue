<template>
  <main>
    <adminnav msg="Submission Review" />

	<img src="..." class="img-fluid" alt="Responsive image"/>
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
export default {
  name: "ideptdues",
  components: {
    adminnav,
  },
  data() {
    return {
      filename: null,
	  fileUrl:null
    };
  },
  created() {
    if (this.$route.query.year === undefined) {
      this.$route.push("/admindashboard");
    }
    this.filename = this.$route.query.year;
	this.fileUrl = `http://localhost:8000/api/deptdues/${this.filename}`;
  
  },
};
</script>

<style></style>
