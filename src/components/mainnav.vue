<template>
  <div>
    <b-navbar
      id="navbar"
      toggleable
      class="navbar navbar-hide-on-scroll navbar-expand-sm navbar-collapse mb-0  px-3 py-2 "
      type="dark"
      variant="dark"
    >
      <b-navbar-brand class="navbar-nav-svg ">
        <router-link class="text-white" to="/" style="text-decoration:none;">
        Login
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <slot>
            <b-nav-item>
              <router-link
                style="text-decoration:none;"
                class="text-white"
                to="/about"
              >
               
              </router-link>
            </b-nav-item>
          </slot>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {}
  }
}
</script>

<style scoped>
.navbar.navbar-dark.bg-dark {
  background-color: rgb(16, 32, 41) !important;
  width: 100%;
}
</style>
