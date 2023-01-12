<template>
  <main>
    <h4 class="text-dark text-center">School Fees</h4>
    <table
      class="table-responsive table mt-5 text-dark"
      v-if="schFees.length != 0"
    >
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

      <tbody v-for="(schFee, index) in schFees" :key="index" :value="schFee.id">
        <tr>
          <td class="text-truncate">{{ index + 1 }}</td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year: schFee.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
              >{{ schFee.first_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year: schFee.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
              >{{ schFee.second_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year: schFee.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
              >{{ schFee.third_yr }}</router-link
            >
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year: schFee.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
              >{{ schFee.fourth_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year: schFee.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
              >{{ schFee.fifth_yr }}
            </router-link>
          </td>
          <td>{{ schFee.status }}</td>
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">
        You have not added any school fees yet
      </p>
    </small>

    <!-- add modal ---->

    <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
    <!-- end of add modal --->
  </main>
</template>

<script>
export default {
  name: "fetchSchFees",
  props: ["schFees"],
  data() {
    return {
      error: [],
    };
  },
};
</script>
