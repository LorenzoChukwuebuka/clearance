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
      this.$http.get(`${this.$PORT}totalAdmins`).then((res) => {
        this.admins = res.data[0].total_admins;
      });
    },
    getDepts() {
      this.$http.get(`${this.$PORT}totalDepts`).then((res) => {
        this.depts = res.data[0].total_depts;
      });
    },
    getStudent() {
      this.$http.get(`${this.$PORT}totalStudents`).then((res) => {
        this.students = res.data[0].total_students;
      });
    },
    getpendingschoolfees() {
      this.$http.get(`${this.$PORT}pendingschoolfees`).then((res) => {
        this.pendingschfees = res.data[0].pending_schoolfees;
      });
    },

    getapprovedschfees() {
      this.$http.get(`${this.$PORT}totalapprovedschfees`).then((res) => {
        this.approvedschfees = res.data[0].approved_schoolfees;
      });
    },

    getapproveddeptdues() {
      this.$http.get(`${this.$PORT}totalapproveddeptdues`).then((res) => {
        console.log(res.data);
      });
    },

    getpendinglibrary() {
      this.$http
        .get(`${this.$PORT}totalpendinglibrary`)
        .then((res) => {
          this.pendinglibrary = res.data[0].pending_library;
        });
    },

    getapprovedlibrary() {
      this.$http
        .get(`${this.$PORT}totalapprovedlibrary`)
        .then((res) => {
          this.approvedlibrary = res.data[0].approved_library;
        });
    },
  },
};
</script>

<style></style>
