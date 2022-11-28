<template>
  <main>
    <adminnav msg="Admin Dashboard" />

    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Pending library clearance</h4>

      <div class="row justify-content-center mt-5">
        <approvelibraryfees :pendinglibrary="pendinglibrary" @Id="approvedue" />
        <br />
        <approvedlibraryfees :approvedLibraryfees="approvedlibrary" />
      </div>
    </div>
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";

import approvelibraryfees from "../../components/admin/students/approvependinglibraryfees.vue";
import approvedlibraryfees from "../../components/admin/students/approvedlibraryfees.vue";
export default {
  name: "pendingLibrary",
  components: {
    adminnav,
    approvelibraryfees,
    approvedlibraryfees,
  },
  data() {
    return {
      pendinglibrary: [],
      approvedlibrary: [],
    };
  },
  mounted() {
    this.getpendinglibraryfees();
    this.getapprovedlibraryfees();
  },
  methods: {
    async getpendinglibraryfees() {
      let response = await this.$http.get(
        "http://localhost:8000/api/v1/getpendinglibrarydues"
      );
      this.pendinglibrary = response.data;
    },
    async approvedue(Id) {
      try {
        if (window.confirm("Do you want to approve?")) {
          const res = await this.$http.put(
            `http://localhost:8000/api/v1/approvelibrary/${Id}`
          );
          alert(res.data.message);
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getapprovedlibraryfees() {
      try {
        let response = await this.$http.get(
          "http://localhost:8000/api/v1/getapprovedlibrarydue"
        );

        this.approvedlibrary = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
