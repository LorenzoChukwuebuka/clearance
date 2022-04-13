<template>
  <main>
    <mainnav>
      <b-navbar-brand class="navbar-nav-svg ">
        <router-link
          class="text-white"
          to="/studentdash"
          style="text-decoration:none;"
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
            <router-link style="text-decoration:none;" class="text-white" to="/student/deptdues">
              Departmental Dues
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link style="text-decoration:none;" class="text-white" to="/student/schfees">
              School Fees
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link style="text-decoration:none;" class="text-white" to="">
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link style="text-decoration:none;" class="text-white" to="">
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link style="text-decoration:none;" class="text-white" to="">
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <a
              href="#"
              style="text-decoration:none;"
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
import mainnav from '../mainnav.vue'
export default {
  name: 'studentnav',
  components: {
    mainnav
  },
  props: {
    msg: String
  },
  methods: {
    logout () {
      localStorage.removeItem('Id')
      localStorage.removeItem('name')
      this.$router.push('/studentdash')
    }
  }
}
</script>

<style></style>
