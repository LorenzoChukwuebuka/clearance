<template>
  <main>
    <adminnav msg="Admin Dashboard" />
    <adminDashComponent
      :admins="admins"
      :students="students"
      :depts="depts"
      :pendingschfees="pendingschfees"
      :pendingdeptdues="pendingdeptdues"
      :approveddeptdues="approveddeptdues"
      :pendinglibrary="pendinglibrary"
      :approvedlibrary="approvedlibrary"
	  :approvedschfees="approvedschfees"
    />
  </main>
</template>

<script>
import adminDashComponent from "@/components/admin/adminDashComponent.vue";
import adminnav from "@/components/admin/adminnav.vue";
import approvedeptdues from "@/components/admin/students/approvependingdeptdues.vue";
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
      approveddeptdues: "",
      approvedschfees: "",
      approvedlibrary: "",
      pendinglibrary: "",
    };
  },
  created() {
    this.getAdmins();
    this.getDepts();
    this.getStudent();
    this.getpendingschoolfees();
    this.getapproveddeptdues();
    this.getapprovedschfees();
    this.getapprovedlibrary();
    this.getpendinglibrary();
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

    getapprovedschfees() {
      this.$http
        .get("http://localhost:8000/api/v1/totalapprovedschfees")
        .then((res) => {
          this.approvedschfees = res.data[0].approved_schoolfees;
        });
    },

    getapproveddeptdues() {
      this.$http
        .get("http://localhost:8000/api/v1/totalapproveddeptdues")
        .then((res) => {
          console.log(res.data);
        });
    },

    getpendinglibrary() {
      this.$http
        .get("http://localhost:8000/api/v1/totalpendinglibrary")
        .then((res) => {
          this.pendinglibrary = res.data[0].pending_library;
        });
    },

    getapprovedlibrary() {
      this.$http
        .get("http://localhost:8000/api/v1/totalapprovedlibrary")
        .then((res) => {
          this.approvedlibrary = res.data[0].approved_library;
        });
    },
  },
};
</script>

<style></style>
