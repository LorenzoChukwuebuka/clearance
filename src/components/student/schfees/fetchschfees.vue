<template>
  <main>
    <h4 class="text-dark text-center">School Fees</h4>
    <table class="table mt-5 text-dark" v-if="schFees.length != 0">
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
          <td>{{ index + 1 }}</td>
          <td>{{ schFee.first_yr }}</td>
          <td>{{ schFee.second_yr }}</td>
          <td>{{ schFee.third_yr }}</td>
          <td>{{ schFee.fourth_yr }}</td>
          <td>{{ schFee.fifth_yr }}</td>
          <td>{{ schFee.status }}</td>
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">
        You have not added any courses yet
      </p>
    </small>

    <!-- add modal ---->

    <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
    <!-- end of add modal --->
  </main>
</template>

<script>
export default {
  name: 'fetchSchFees',
  props: ['schFees'],
  data () {
    return {
      error: []
    }
  }
}
</script>
