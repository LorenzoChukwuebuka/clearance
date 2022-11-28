<template>
    <main>
      <adminnav msg="Admin Dashboard" />
  
      <div class="container-fluid mt-2">
        <h4 class="text-dark text-center">Pending Departmental Dues</h4>
  
        <div class="row justify-content-center mt-5">
          <approvedeptdues :pendingDeptDues="pendingDeptDues" @Id="approvedue" />
          <br />
          <approveddeptdues :approveDeptDues="approveDeptDues" />
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import approvedeptdues from "@/components/admin/students/approvependingdeptdues.vue";
  import approveddeptdues from "../../components/admin/students/approveddeptdues.vue";
  import adminnav from "@/components/admin/adminnav.vue";
  export default {
    name: "pendingdeptdues",
    components: {
      approvedeptdues,
      approveddeptdues,
      adminnav,
    },
    data() {
      return {
        pendingDeptDues: [],
        approveDeptDues: [],
      };
    },
    mounted() {
      this.getpendingdeptdues();
      this.getapproveddeptdues();
    },
    methods: {
      async getpendingdeptdues() {
        try {
          let res = await this.$http.get(
            "http://localhost:8000/api/v1/getpendingdeptdues"
          );
          this.pendingDeptDues = res.data;
        } catch (error) {
          console.log(error);
        }
      },
  
      async getapproveddeptdues() {
        try {
          let res = await this.$http.get(
            "http://localhost:8000/api/v1/getapproveddeptdues"
          );
  
          this.approveDeptDues = res.data;
        } catch (error) {
          console.log(error);
        }
      },
      async approvedue(Id) {
        try {
          if (window.confirm("Do you want to approve?")) {
            const res = await this.$http.put(
              `http://localhost:8000/api/v1/approvedeptdues/${Id}`
            );
            alert(res.data.message);
          } else {
            return;
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
  </script>
  