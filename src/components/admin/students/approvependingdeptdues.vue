<template>
  <main>
    <h4 class="text-dark text-center"> Departmental Dues </h4>
    <table class="table mt-5 text-dark" v-if="deptDues.length != 0">
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

      <tbody v-for="(deptDue, index) in deptDues" :key="index" :value=" deptDue.id">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{  deptDue.first_yr }}</td>
          <td>{{  deptDue.second_yr }}</td>
          <td>{{  deptDue.third_yr }}</td>
          <td>{{  deptDue.fourth_yr }}</td>
          <td>{{  deptDue.fifth_yr }}</td>
          <td>{{  deptDue.status }}</td>
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">
        You have not uploaded any dues yet
      </p>
    </small>

    <!-- add modal ---->

    <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
    <!-- end of add modal --->
  </main>
</template>
