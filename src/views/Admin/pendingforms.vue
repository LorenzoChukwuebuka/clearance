<template>
  <main>
    <adminnav msg="Admin Dashboard" />
    <main>
      <div class="container-fluid mt-2">
        <h4 class="text-dark text-center">Pending Clearance forms</h4>

        <div class="row justify-content-center mt-5">
          <div class="container col-8"></div>

          
        </div>
      </div>
    </main>
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
export default {
  name: "pendingforms",
  components: {
    adminnav,
  },
  data() {
    return {
      pending_form:[]
    };
  },
  mounted(){},
  methods: {
    pending_form() {
      $this.http
        .get("http://localhost:8000/api/v1/pendingform")
        .then((res) => {
			this.pending_form = res.data
		});
    },
  },
};
</script>

<style></style>
