<template>
  <main>
    <adminnav msg="Admin Dashboard" />

    <main>
      <div class="container-fluid mt-2">
        <h4 class="text-dark text-center">Add Admin</h4>

        <addAdmin @form="submitForm" />

        <div class="row justify-content-center mt-5">
          <div class="container col-8">
            <div class="bg-dark" v-if="success.length">
              <span v-for="(suc, index) in success" :key="index">
                <b-alert show variant="danger" dismissible>
                  {{ suc }}
                </b-alert>
              </span>
            </div>

            <fetchAdmin :admins="admins" @Id="delAdmin" @edit="updateAdmin" />
          </div>
        </div>
      </div>
    </main>
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
import addAdmin from "@/components/admin/adminComp/addAdmin.vue";
import fetchAdmin from "@/components/admin/adminComp/fetchAdmin.vue";

export default {
  name: "createAdmin",
  components: {
    adminnav,
    addAdmin,
    fetchAdmin,
  },
  data() {
    return {
      success: [],
      admins: [],
    };
  },
  mounted() {
    this.getAdmins();
  },
  methods: {
    submitForm(form) {
      this.$http
        .post("http://localhost:8000/api/v1/admin", form)
        .then((res) => {
          if (res.data.message == "inserted successfully") {
            this.success.push(res.data.message);
          } else {
            alert("User already Exists");
          }
        })
        .catch((err) => console.log(err));
    },
    getAdmins() {
      this.$http
        .get("http://localhost:8000/api/v1/admin")
        .then((res) => {
          this.admins = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    delAdmin(Id) {
      if (confirm("Are you sure ?")) {
        this.$http.delete(`http://localhost:8000/api/v1/admin/${Id}`);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    },
    updateAdmin(edit) {
      if (confirm("Are you sure you want to update this ?")) {
        this.$http
          .put(`http://localhost:8000/api/v1/admin/${edit.id}`, edit)
          .then((res) => {
            if (res.data.message === "updated") {
              alert(res.data.message);
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            }
          });
      }
    },
  },
};
</script>

<style></style>
