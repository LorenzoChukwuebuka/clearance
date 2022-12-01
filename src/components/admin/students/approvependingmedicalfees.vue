<template>
    <main>
      <!-- <h4 class="text-dark text-center">  </h4> -->
      <table
        class="table table-responsive mt-5 text-dark"
        v-if="medical.length != 0"
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Submitted by</th>
            <th scopoe="col">Registration Number</th>
            <th scope="col">First Year</th>
            <th scope="col">Second Year</th>
            <th scope="col">Third Year</th>
            
            <th scope="col">Status</th>
            <th scope="col">Approve</th>
          </tr>
        </thead>
  
        <tbody
          v-for="(medical, index) in medical"
          :key="index"
          :value="medical.id"
        >
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ medical.name }}</td>
            <td>{{ medical.reg_number }}</td>
            <td>
              <router-link
                :to="{
                  name: 'ideptdues',
                  query: {
                    year: medical.first_yr,
                  },
                }"
                style="text-decoration: none; color: inherit"
                target="_blank"
                >{{ medical.first_yr }}</router-link
              >
            </td>
            <td>
              <router-link
                :to="{
                  name: 'ideptdues',
                  query: {
                    year: medical.second_yr,
                  },
                }"
                style="text-decoration: none; color: inherit"
                target="_blank"
                >{{ medical.second_yr }}</router-link
              >
            </td>
            <td>
              <router-link
                :to="{
                  name: 'ideptdues',
                  query: {
                    year: medical.third_yr,
                  },
                }"
                style="text-decoration: none; color: inherit"
                target="_blank"
                >{{ medical.third_yr }}</router-link
              >
            </td>
            
            <td>
              <router-link to="" style="text-decoration: none; color: inherit">{{
                medical.status
              }}</router-link>
            </td>
            <td>
              <b-icon
                icon="pen"
                @click="approved(medical.id)"
                variant="success"
              ></b-icon>
            </td>
          </tr>
        </tbody>
      </table>
      <small v-else>
        <p class="text-center text-dark">
          There is no pending medical Clearance to be approved
        </p>
      </small>
  
      <!-- add modal ---->
  
      <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
      <!-- end of add modal --->
    </main>
  </template>
  <script>
  export default {
    name: "approvemedicalclearance",
    props: ["medical"],
    methods: {
      approved(id) {
        this.$emit("Id", id);
      },
    },
  };
  </script>
  