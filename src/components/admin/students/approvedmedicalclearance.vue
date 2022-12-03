<template>
    <main>
      <h4 class="text-dark text-center">Approved Medical Clearance</h4>
      <table
        class="table  table-responsive mt-5 text-dark"
        v-if="approvedMedical.length != 0"
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Submitted by</th>
            <th scope="col">Registration no</th>
            <th scope="col">First Year</th>
            <th scope="col">Second Year</th>
            <th scope="col">Third Year</th>
           
            <th scope="col">Status</th>
          </tr>
        </thead>
  
        <tbody
          v-for="(medical, index) in approvedMedical"
          :key="index"
          :value="medical.id"
        >
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ medical.name }}</td>
            <td>{{ medical.reg_number }}</td>
            <td>{{ medical.first_yr }}</td>
            <td>{{ medical.second_yr }}</td>
            <td>{{ medical.third_yr }}</td>
            <td>{{ medical.status }}</td>
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
    name: "approvedmedicalclearance",
    props: ["approvedMedical"],
  };
  </script>
  