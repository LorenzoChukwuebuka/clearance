<template>
  <main>
    <h4 class="text-dark text-center"></h4>
    <table class="table mt-5 text-dark" v-if="pendingSchfees.length != 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Year</th>
          <th scope="col">Second Year</th>
          <th scope="col">Third Year</th>
          <th scope="col">Fourth Year</th>
          <th scope="col">Fifth Year</th>
          <th scope="col">Status</th>
        </tr>
      </thead>

      <tbody
        v-for="(schfees, index) in pendingSchfees"
        :key="index"
        :value="schfees.id"
      >
        <tr>
          <td>{{ index + 1 }}</td>
          <td>
            <router-link
              :to="{
                name: 'ischfees',
                query: {
                  year: schfees.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
            >
              {{ schfees.first_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ischfees',
                query: {
                  year: schfees.second_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
            >
              {{ schfees.second_yr }}</router-link
            >
          </td>
          <td>
            <router-link
              :to="{
                name: 'ischfees',
                query: {
                  year: schfees.third_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
            >
              {{ schfees.third_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ischfees',
                query: {
                  year: schfees.fourth_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
            >
              {{ schfees.fourth_yr }}</router-link
            >
          </td>
          <td>
            <router-link
              :to="{
                name: 'ischfees',
                query: {
                  year: schfees.fifth_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
            >
              {{ schfees.fifth_yr }}</router-link
            >
          </td>
          <td>
            <router-link to=""> {{ schfees.status }}</router-link>
          </td>

          <td>
            <b-icon
              icon="pen"
              @click="approved(schfees.id)"
              variant="success"
            ></b-icon>
          </td>
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">There are no pending school fees</p>
    </small>

    <!-- add modal ---->

    <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
    <!-- end of add modal --->
  </main>
</template>
<script>
export default {
  name: "approvependingschfees",
  props: ["pendingSchfees"],
  methods: {
    approved(id) {
      this.$emit("Id", id);
    },
  },
};
</script>
