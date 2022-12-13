<template>
  <main>
    <mainnav msg="Student Login" signup="Student's Clearance Form" />
    <div class="container">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <h4 class="mx-auto">Clearance Form</h4>
            <div class="card px-5 py-5" id="form1">
              <div class="form-data">
                <div class="forms-inputs mb-4">
                  <span> Name </span>
                  <input
                    autocomplete="off"
                    type="text"
                    v-model="form.user"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid': !validuser(form.user) && userBlured,
                    }"
                    v-on:blur="userBlured = true"
                  />
                  <div class="invalid-feedback">Name is required!</div>
                </div>
                <div class="forms-inputs mb-4">
                  <span> Reg Number </span>
                  <input
                    autocomplete="off"
                    type="text"
                    v-model="form.regnum"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid': !validregnum(form.regnum) && userBlured,
                    }"
                    v-on:blur="userBlured = true"
                  />
                  <div class="invalid-feedback">
                    Reg Num is required and should not be less than 10
                  </div>
                </div>
                <div class="forms-inputs mb-4">
                  <span>Year of Graduation </span>
                  <input
                    autocomplete="off"
                    type="date"
                    v-model="form.gradYear"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid': !validgradyear(form.gradYear) && userBlured,
                    }"
                    v-on:blur="userBlured = true"
                  />
                  <div class="invalid-feedback">required!</div>
                </div>

                <div class="forms-inputs mb-4">
                  <span>Project supervisors name </span>
                  <input
                    autocomplete="off"
                    type="text"
                    v-model="form.supervisor"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid':
                        !validsupervisor(form.supervisor) && userBlured,
                    }"
                    v-on:blur="userBlured = true"
                  />
                  <div class="invalid-feedback">Supervisor is required!</div>
                </div>

                <div class="forms-inputs mb-4">
                  <span>Course Advisor's name </span>
                  <input
                    autocomplete="off"
                    type="text"
                    v-model="form.course_adviser"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid':
                        !validcourseadviser(form.course_adviser) && userBlured,
                    }"
                    v-on:blur="userBlured = true"
                  />
                  <div class="invalid-feedback">
                    Course Adviser is required!
                  </div>
                </div>

                <div class="forms-inputs mb-4">
                  <span>Department </span>

                  <input
                    autocomplete="off"
                    type="text"
                    v-model="form.dept"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid': !validdeptadmin(form.dept) && userBlured,
                    }"
                    v-on:blur="userBlured = true"
                  />

                  <div class="invalid-feedback">Dept is required!</div>
                </div>

                <div class="forms-inputs mb-4">
                  <span>Department Admin</span>
                  <input
                    autocomplete="off"
                    type="text"
                    v-model="form.deptadmin"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid':
                        !validdeptadmin(form.deptadmin) && userBlured,
                    }"
                    v-on:blur="userBlured = true"
                  />
                  <div class="invalid-feedback">required!</div>
                </div>

                <div class="mb-3">
                  <button @click="submit" class="btn btn-dark w-100">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import mainnav from "@/components/mainnav.vue";
export default {
  name: "clearanceform",
  components: {
    mainnav,
  },
  data() {
    return {
      form: {
        user: "",
        regnum: "",
        gradYear: "",
        supervisor: "",
        course_adviser: "",
        deptadmin: "",
        dept: "",
      },

      userBlured: false,
      valid: false,
      password: "",
      passwordBlured: false,
      errors: [],
      depts: [],
    };
  },
  mounted() {
    this.get_dept();
  },
  methods: {
    validate() {
      this.userBlured = true;
      if (
        this.validuser(this.form.user) &&
        this.validregnum(this.form.regnum) &&
        this.validgradyear(
          this.form.gradYear &&
            this.validdeptadmin(this.form.deptadmin) &&
            this.validcourseadviser(this.form.course_adviser) &&
            this.validsupervisor(this.form.supervisor)
        )
      ) {
        this.valid = true;
      }
    },

    validuser(user) {
      if (user.length >= 5) {
        return true;
      }
    },
    validregnum(regnum) {
      if (regnum.length >= 10) {
        return true;
      }
    },
    validgradyear(gradYear) {
      if (gradYear.length >= 5) {
        return true;
      }
    },
    validsupervisor(supervisor) {
      if (supervisor.length >= 5) {
        return true;
      }
    },
    validcourseadviser(course_adviser) {
      if (course_adviser.length >= 5) {
        return true;
      }
    },

    validdeptadmin(password) {
      if (password.length >= 5) {
        return true;
      }
    },
    validdept(dept) {
      if (dept.length >= 3) {
        return true;
      }
    },

    get_dept() {
      this.$http.get("http://localhost:8000/api/v1/Dept").then((res) => {
        this.dept = res.data;
      });
    },

    async submit(e) {
      try {
        e.preventDefault();

        let data = {};

        data.user = this.form.user;
        data.regnum = this.form.regnum;
        data.supervisor = this.form.supervisor;
        data.gradYear = this.form.gradYear;
        data.course_adviser = this.form.course_adviser;
        data.deptadmin = this.form.deptadmin;
        data.dept = this.form.dept;

        let res = await this.$http.post(
          "http://localhost:8000/api/v1/form",
          data
        );

        if (res.data.message === "submission successful") {
          alert("submission successful. Wait for approval");
          setTimeout(window.location.reload(), 3000);
        }

        if (res.data.message === "Invalid Inputs") {
          alert("invalid inputs");
        }

        if (res.data.message === "Student already exists!") {
          alert("Student already exists!");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
body {
  background: #000;
}

.card {
  border: none;
  height: inherit;
}

.forms-inputs {
  position: relative;
}

.forms-inputs span {
  position: absolute;
  top: -18px;
  left: 10px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 15px;
}

.forms-inputs input {
  height: 50px;
  border: 2px solid #eee;
}

.forms-inputs input:focus {
  box-shadow: none;
  outline: none;
  border: 2px solid #000;
}

.btn {
  height: 50px;
}

.success-data {
  display: flex;
  flex-direction: column;
}

.bxs-badge-check {
  font-size: 90px;
}
</style>
