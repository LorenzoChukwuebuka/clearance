<template>
    <main>
      <h4 class="text-dark text-center">medical Fees</h4>
      <table class="table table-responsive mt-5 text-dark" v-if="medical.length != 0">
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
          v-for="(medical, index) in medical"
          :key="index"
          :value="medical.id"
        >
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ medical.first_yr }}</td>
            <td>{{ medical.second_yr }}</td>
            <td>{{ medical.third_yr }}</td>
            <td>{{ medical.fourth_yr }}</td>
            <td>{{ medical.fifth_yr }}</td>
            <td>{{ medical.status }}</td>
          </tr>
        </tbody>
      </table>
      <small v-else>
        <p class="text-center text-dark">
          You have not added any medical fees yet
        </p>
      </small>
  
      <!-- add modal ---->
  
      <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
      <!-- end of add modal --->
    </main>
  </template>
  
  <script>
  export default {
    name: "getmedical",
    props: ["medical"],
    data() {
      return {
        error: [],
      };
    },
  };
  </script>
  