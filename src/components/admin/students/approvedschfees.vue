<template>
  <main>
    <h4 class="text-dark text-center"> Approved School fees </h4>
    <table class="table mt-5 text-dark" v-if="approvedSchFees.length != 0">
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
        v-for="(schfees, index) in approvedSchFees"
        :key="index"
        :value="schfees.id"
      >
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ schfees.first_yr }}</td>
          <td>{{ schfees.second_yr }}</td>
          <td>{{ schfees.third_yr }}</td>
          <td>{{ schfees.fourth_yr }}</td>
          <td>{{ schfees.fifth_yr }}</td>
          <td>{{ schfees.status }}</td>
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
  name: "approvedschfees",
  props: ["approvedSchFees"],
};
</script>
