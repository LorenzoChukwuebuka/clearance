<template>
  <main>
    <!-- <h4 class="text-dark text-center">  </h4> -->
    <table class="table mt-5 text-dark" v-if="pendingDeptDues.length != 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Year</th>
          <th scope="col">Second Year</th>
          <th scope="col">Third Year</th>
          <th scope="col">Fourth Year</th>
          <th scope="col">Fifth Year</th>
          <th scope="col">Status</th>
          <th scope="col">Approve</th>
        </tr>
      </thead>

      <tbody
        v-for="(deptDue, index) in pendingDeptDues"
        :key="index"
        :value="deptDue.id"
      >
        <tr>
          <td>{{ index + 1 }}</td>
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
              >{{ deptDue.first_yr }}</router-link
            >
          </td>
          <td>
            <router-link
              :to="{
                name: 'ideptdues',
                query: {
                  year: deptDue.second_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
			    target="_blank"
              >{{ deptDue.second_yr }}</router-link
            >
          </td>
          <td>
            <router-link
              :to="{
                name: 'ideptdues',
                query: {
                  year: deptDue.third_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
			    target="_blank"
              >{{ deptDue.third_yr }}</router-link
            >
          </td>
          <td>
            <router-link
              :to="{
                name: 'ideptdues',
                query: {
                 year: deptDue.fourth_yr,
                },
              }"
              style="text-decoration: none; color: inherit"
			    target="_blank"
              >{{ deptDue.fourth_yr }}</router-link
            >
          </td>
          <td>
            <router-link
              :to="{
                name: 'ideptdues',
                query: {
                  year: deptDue.fifth_yr,
                },
              }"
			  target="_blank"
              style="text-decoration: none; color: inherit"
              >{{ deptDue.fifth_yr }}</router-link
            >
          </td>
          <td>
            <router-link to="" style="text-decoration: none; color: inherit">{{
              deptDue.status
            }}</router-link>
          </td>
          <td>
            <b-icon
              icon="pen"
              @click="approved(deptDue.id)"
              variant="success"
            ></b-icon>
          </td>
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">
        There is no pending dept dues to be approved
      </p>
    </small>

    <!-- add modal ---->

    <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
    <!-- end of add modal --->
  </main>
</template>
<script>
export default {
  name: "approvedeptdues",
  props: ["pendingDeptDues"],
  methods: {
    approved(id) {
      this.$emit("Id", id);
    },
  },
};
</script>
