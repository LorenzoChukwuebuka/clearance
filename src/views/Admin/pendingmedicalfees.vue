<template>
  <main>
    <adminnav msg="Admin Dashboard" />

    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Pending Medical Clearance</h4>

      <div class="row justify-content-center mt-5">
        <div class="container col-8">
          <approvependingmedicalclearance :medical="medical" @Id="approvedue" />
          <br />
          <approvedmedicalclearance :approvedMedical="approvedMedical" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
import approvependingmedicalclearance from "../../components/admin/students/approvependingmedicalfees.vue";
import approvedmedicalclearance from "../../components/admin/students/approvedmedicalclearance.vue";
export default {
  name: "pendingMedical",
  components: {
    adminnav,
    approvependingmedicalclearance,
    approvedmedicalclearance,
  },
  data() {
    return {
      medical: [],
      approvedMedical: [],
    };
  },
  mounted() {
    this.getpendingmedicalfees();
    this.getapprovedMedicalClearacnce();
  },
  methods: {
    async getpendingmedicalfees() {
      try {
        let response = await this.$http.get(
          "http://localhost:8000/api/v1/getpendingmedicaldues"
        );

        this.medical = response.data;
      } catch (error) {
        console.log();
      }
    },
    async approvedue(Id) {
      try {
        if (window.confirm("Do you want to approve?")) {
          const res = await this.$http.put(
            `http://localhost:8000/api/v1/approvemedical/${Id}`
          );
          alert(res.data.message);
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getapprovedMedicalClearacnce() {
      try {
        let response = await this.$http.get(
          "http://localhost:8000/api/v1/getapprovedmedicaldues"
        );
        this.approvedMedical = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
