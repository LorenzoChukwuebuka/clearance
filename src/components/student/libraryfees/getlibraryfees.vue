<template>
  <main>
    <h4 class="text-dark text-center">Library Fees</h4>
    <table class="table mt-5 text-dark" v-if="library.length != 0">
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
      cal Clearance

      <tbody
        v-for="(library, index) in library"
        :key="index"
        :value="library.id"
      >
        <tr>
          <td>{{ index + 1 }}</td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year:  library.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
              >{{ library.first_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year:  library.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
              >{{ library.second_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year:  library.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
              >{{ library.third_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year:  library.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
              >{{ library.fourth_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year:  library.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
              >{{ library.fifth_yr }}
            </router-link>
          </td>
          <td>{{ library.status }}</td>
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">
        You have not added any library fees yet
      </p>
    </small>

    <!-- add modal ---->

    <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
    <!-- end of add modal --->
  </main>
</template>

<script>
export default {
  name: "getlibrary",
  props: ["library"],
  data() {
    return {
      error: [],
    };
  },
};
</script>
