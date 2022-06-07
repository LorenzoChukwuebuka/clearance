<template>
  <main>
    <adminnav msg="Admin Dashboard" />

    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Pending School Fees</h4>

      <div class="row justify-content-center mt-5">
        <approvependingschfees
          :pendingSchfees="pendingSchfees"
          @Id="approveschfees"
        />
        <br/>
        <approvedschfees :approvedSchFees="approvedSchFees" />
      </div>
    </div>
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
import approvependingschfees from "../../components/admin/students/approvependingschfees.vue";
import approvedschfees from "../../components/admin/students/approvedschfees.vue";
export default {
  name: "pendingschfees",
  data() {
    return {
      pendingSchfees: [],
      approvedSchFees: [],
    };
  },
  components: {
    adminnav,
    approvependingschfees,
    approvedschfees,
  },
  mounted() {
    this.getpendingschfees();
    this.getApprovedSchFees();
  },
  methods: {
    async getpendingschfees() {
      try {
        const res = await this.$http.get(
          "http://localhost:8000/api/v1/getpendingSchfees"
        );

        this.pendingSchfees = res.data;
      } catch (error) {
        console.log(error);
      }
    },

    async approveschfees(Id) {
      try {
        if (window.confirm("Do you want to approve?")) {
          const res = await this.$http.put(
            `http://localhost:8000/api/v1/approveSchFees/${Id}`
          );

          alert(res.data.message);
        } else {
          return;
        }
      } catch (error) {
		  console.log(error)
	  }
    },
    async getApprovedSchFees() {
      try {
        const res = await this.$http.get(
          "http://localhost:8000/api/v1/getApprovedSchFees"
        );

        this.approvedSchFees = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
