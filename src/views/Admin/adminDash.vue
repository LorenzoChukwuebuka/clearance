<template>
  <main>
    <adminnav msg="Admin Dashboard" />
    <adminDashComponent
      :admins="admins"
      :students="students"
      :depts="depts"
      :pendingschfees="pendingschfees"
      :pendingdeptdues="pendingdeptdues"
    />
  </main>
</template>

<script>
import adminDashComponent from "@/components/admin/adminDashComponent.vue";
import adminnav from "@/components/admin/adminnav.vue";
export default {
  name: "adminDash",
  components: {
    adminDashComponent,
    adminnav,
  },
  data() {
    return {
      admins: "",
      depts: "",
      students: "",
      pendingschfees: "",
      pendingdeptdues: "",
    };
  },
  created() {
    this.getAdmins();
    this.getDepts();
    this.getStudent();
    this.getpendingschoolfees();
    this.getpendingdeptdues();
  },
  methods: {
    getAdmins() {
      this.$http.get("http://localhost:8000/api/v1/totalAdmins").then((res) => {
        this.admins = res.data[0].total_admins;
      });
    },
    getDepts() {
      this.$http.get("http://localhost:8000/api/v1/totalDepts").then((res) => {
        this.depts = res.data[0].total_depts;
      });
    },
    getStudent() {
      this.$http
        .get("http://localhost:8000/api/v1/totalStudents")
        .then((res) => {
          this.students = res.data[0].total_students;
        });
    },
    getpendingschoolfees() {
      this.$http
        .get("http://localhost:8000/api/v1/pendingschoolfees")
        .then((res) => {
          this.pendingschfees = res.data[0].pending_schoolfees;
        });
    },

    getpendingdeptdues() {
      this.$http
        .get("http://localhost:8000/api/v1/pendingdeptdues")
        .then((res) => {
          this.pendingdeptdues = res.data[0].pending_deptdues;
        });
    },
  },
};
</script>

<style></style>
