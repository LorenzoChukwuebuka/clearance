<template>
  <main>
    <mainnav>
      <b-navbar-brand class="navbar-nav-svg">
        <router-link
          class="text-white"
          to="/admindash"
          style="text-decoration: none"
        >
          {{ msg }}
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="mr-auto">
          <b-nav-item>
            <router-link
              style="text-decoration: none"
              class="text-white"
              to="/admin/dept"
            >
              Department
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              style="text-decoration: none"
              class="text-white"
              to="/admin/createAdmin"
            >
              Admins
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              style="text-decoration: none"
              class="text-white"
              to="/admin/pendingform"
            >
              Forms
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              style="text-decoration: none"
              class="text-white"
              to="/admin/pendingschfees"
            >
              School fees
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              style="text-decoration: none"
              class="text-white"
              to="/admin/pendingdeptdues"
            >
              Departmental Dues
            </router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link
              to="/admin/pendinglibrary"
              style="text-decoration: none"
              class="text-white"
            >
              library
            </router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link
              to="/admin/pendingmedical"
              style="text-decoration: none"
              class="text-white"
            >
              medical
            </router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link
              to="/admin/deanclearance"
              style="text-decoration: none"
              class="text-white"
            >
              Dean Clearance
            </router-link>
          </b-nav-item>

          <b-nav-item>
            <a
              href="#"
              style="text-decoration: none"
              class="text-white"
              @click="logout"
            >
              Log out
            </a>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </mainnav>
  </main>
</template>

<script>
import mainnav from "../mainnav.vue";
export default {
  name: "adminnav",
  components: {
    mainnav,
  },
  props: {
    msg: String,
  },
  methods: {
    logout() {
      localStorage.removeItem("Id");
      localStorage.removeItem("name");
      this.$router.push("/admin/login");
    },
  },
};
</script>

<style></style>
