<template>
  <main>
    <adminnav msg="Admin Dashboard" />
    <div class="container mt-2">
      <h4 class="text-dark text-center">
        Students Awaiting Registry clearance
      </h4>

      <div class="row justify-content-center mt-5">
        <table class="table mt-5 text-dark">
          <thead>
            <tr>
              <th>index</th>
              <th>Name</th>
              <th>RegNumber</th>
              <th>course Adviser</th>
              <th>Project supervisor</th>
              <th>department</th>
            </tr>
          </thead>
          <tbody
            v-for="(cleared, index) in clearance"
            :key="index"
            :value="cleared.id"
          >
            <tr>
              <td>{{ index + 1 }}</td>
              <td>{{ cleared.name }}</td>
              <td>{{ cleared.reg_number }}</td>
              <td>{{ cleared.course_adviser }}</td>
              <td>{{ cleared.project_supervisor }}</td>
              <td>{{ cleared.department }}</td>
              <td>
                <b-icon
                  icon="pen"
                  @click="approved(cleared.id)"
                  variant="success"
                ></b-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row justify-content-center mt-5"></div>
    </div>
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
export default {
  name: "RegistryClearance",
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
          if (response.data.message == "All Students")
            this.clearance = response.data.data;

          console.log(this.clearance);
        });
    },
    approved: function (id) {
      confirm("Do you want to approve this student?");

      console.log(id);
      //   this.$http
      //     .post("http://localhost:8000/api/v1/approveClearance", {
      //       id: id,
      //     })
      //     .then((response) => {
      //       if (response.data.message == "Clearance Approved") {
      //         this.getClearance();
      //       }
      //     });
    },
  },
};
</script>
