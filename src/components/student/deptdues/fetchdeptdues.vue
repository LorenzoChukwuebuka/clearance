<template>
  <main>
    <h4 class="text-dark text-center">Departmental Dues</h4>
    <table
      class="table table-responsive mt-5 text-dark"
      v-if="deptDues.length != 0"
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

      <tbody
        v-for="(deptDue, index) in deptDues"
        :key="index"
        :value="deptDue.id"
      >
        <tr>
          <td>{{ index + 1 }}</td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year: deptDue.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
            >
              {{ deptDue.first_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year: deptDue.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
            >
              {{ deptDue.second_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year: deptDue.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
            >
              {{ deptDue.third_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year: deptDue.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
            >
              {{ deptDue.fourth_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ireview',
                query: {
                  year: deptDue.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
            >
              {{ deptDue.fifth_yr }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                name: 'ideptdues',
                query: {
                  year: deptDue.first_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
              target="_blank"
            >
              {{ deptDue.status }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">You have not uploaded any dues yet</p>
    </small>

    <!-- add modal ---->

    <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
    <!-- end of add modal --->
  </main>
</template>

<script>
export default {
  name: "fetchdeptDues",
  props: ["deptDues"],
  data() {
    return {
      error: [],
    };
  },
};
</script>
