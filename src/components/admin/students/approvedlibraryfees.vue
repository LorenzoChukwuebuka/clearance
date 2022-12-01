<template>
  <main>
    <h4 class="text-dark text-center">Approved library Clearance </h4>
    <table
      class="table table-responsive mt-5 text-dark"
      v-if="approvedLibraryfees.length != 0"
    >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Submitted by</th>
          <th scope="col">Registration no</th>
          <th scope="col">First Year</th>
          <th scope="col">Second Year</th>
          <th scope="col">Third Year</th>
          <th scope="col">Fourth Year</th>
          <th scope="col">Fifth Year</th>
          <th scope="col">Status</th>
        </tr>
      </thead>

      <tbody
        v-for="(library, index) in approvedLibraryfees"
        :key="index"
        :value="library.id"
      >
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ library.name }}</td>
          <td>{{ library.reg_number }}</td>
          <td>{{ library.first_yr }}</td>
          <td>{{ library.second_yr }}</td>
          <td>{{ library.third_yr }}</td>
          <td>{{ library.fourth_yr }}</td>
          <td>{{ library.fifth_yr }}</td>
          <td>{{ library.status }}</td>
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">There are no approved school fees</p>
    </small>

    <!-- add modal ---->

    <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
    <!-- end of add modal --->
  </main>
</template>
<script>
export default {
  name: "approvedlibraryfees",
  props: ["approvedLibraryfees"],
};
</script>
