<template>
  <main>
    <adminnav msg="Submission Review" />

    <img :src="fileUrl" class="img-fluid" alt="Responsive image" />
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
      fileUrl: null,
    };
  },
  created() {
    if (this.$route.query.year === undefined) {
      this.$route.push("/admindashboard");
    }
    this.filename = this.$route.query.year;

    console.log(this.filename);
  },
  mounted() {
    this.getFile();
  },
  methods: {
    getFile() {
      this.$http
        .get(`http://localhost:8000/static/deptDues/${this.filename}`)
        .then((res) => {
          this.fileUrl = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
