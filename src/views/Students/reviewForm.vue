<template>
  <main>
    <studentnav msg="Student Dashbooard" />

    <img :src="fileUrl" class="img-fluid" alt="Responsive image" />
  </main>
</template>

<script>
import studentnav from "@/components/student/studentnav.vue";
export default {
  name: "ireview",
  components: {
    studentnav,
  },
  data() {
    return {
      filename: null,
      fileUrl: null,
    };
  },
  created() {
    if (this.$route.query.year === undefined) {
      this.$route.push("/studentdash");
    }
    this.filename = this.$route.query.year;
    this.fileUrl = `${this.$Review}${this.filename}`;
  },
  mounted() {
    // this.getFile();
  },
  methods: {
    getFile() {
      this.$http
        .get(`${this.$Review}${this.filename}`)
        .then((res) => {
          console.log(res);
          // this.fileUrl = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
