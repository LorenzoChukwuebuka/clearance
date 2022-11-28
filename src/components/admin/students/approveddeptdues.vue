<template>
  <main>
    <h4 class="text-dark text-center">Approved Department dues</h4>
    <table
      class="table table-responsive mt-5 text-dark"
      v-if="approveDeptDues.length != 0"
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
        v-for="(deptDues, index) in approveDeptDues"
        :key="index"
        :value="deptDues.id"
      >
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ deptDues.name }}</td>
          <td>{{ deptDues.reg_number }}</td>
          <td>{{ deptDues.first_yr }}</td>
          <td>{{ deptDues.second_yr }}</td>
          <td>{{ deptDues.third_yr }}</td>
          <td>{{ deptDues.fourth_yr }}</td>
          <td>{{ deptDues.fifth_yr }}</td>
          <td>{{ deptDues.status }}</td>
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">
        There are no approved departmental dues
      </p>
    </small>

    <!-- add modal ---->

    <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
    <!-- end of add modal --->
  </main>
</template>
<script>
export default {
  name: "approveddeptdues",
  props: ["approveDeptDues"],
};
</script>
