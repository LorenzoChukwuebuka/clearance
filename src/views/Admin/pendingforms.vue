<template>
  <main>
    <adminnav msg="Admin Dashboard" />

    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Pending Clearance forms</h4>

      <div class="row justify-content-center mt-5">
        <approveclearanceform :pending_form="pending_form" @Id="approveform"/>
      </div>
    </div>
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
import approveclearanceform from "../../components/admin/students/approveclearanceform.vue";
export default {
  name: "pendingforms",
  components: {
    adminnav,
    approveclearanceform,
  },
  data() {
    return {
      pending_form: [],
    };
  },
  mounted() {
    this.pendingform();
  },
  methods: {
    pendingform() {
      this.$http.get("http://localhost:8000/api/v1/pendingform").then((res) => {
        this.pending_form = res.data;
      });
    },

    async approveform(Id){
     try {
		  if (window.confirm("Do you want to approve?")) {
          const res = await this.$http.put(
            `http://localhost:8000/api/v1/approvependingform/${Id}`
          );
        } else {
          return;
        }
	 } catch (error) {
		 
	 }
    }
  },
};
</script>

<style></style>
