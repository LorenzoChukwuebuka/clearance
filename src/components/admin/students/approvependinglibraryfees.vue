<template>
    <main>
      <!-- <h4 class="text-dark text-center">  </h4> -->
      <table
        class="table table-responsive mt-5 text-dark"
        v-if="pendinglibrary.length != 0"
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Submitted by</th>
            <th scopoe="col">Registration Number</th>
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
          v-for="(library, index) in pendinglibrary"
          :key="index"
          :value="library.id"
        >
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ library.name }}</td>
            <td>{{ library.reg_number }}</td>
            <td>
              <router-link
                :to="{
                  name: 'ideptdues',
                  query: {
                    year: library.first_yr,
                  },
                }"
                style="text-decoration: none; color: inherit"
                target="_blank"
                >{{ library.first_yr }}</router-link
              >
            </td>
            <td>
              <router-link
                :to="{
                  name: 'ideptdues',
                  query: {
                    year: library.second_yr,
                  },
                }"
                style="text-decoration: none; color: inherit"
                target="_blank"
                >{{ library.second_yr }}</router-link
              >
            </td>
            <td>
              <router-link
                :to="{
                  name: 'ideptdues',
                  query: {
                    year: library.third_yr,
                  },
                }"
                style="text-decoration: none; color: inherit"
                target="_blank"
                >{{ library.third_yr }}</router-link
              >
            </td>
            <td>
              <router-link
                :to="{
                  name: 'ideptdues',
                  query: {
                    year: library.fourth_yr,
                  },
                }"
                style="text-decoration: none; color: inherit"
                target="_blank"
                >{{ library.fourth_yr }}</router-link
              >
            </td>
            <td>
              <router-link
                :to="{
                  name: 'ideptdues',
                  query: {
                    year: library.fifth_yr,
                  },
                }"
                target="_blank"
                style="text-decoration: none; color: inherit"
                >{{ library.fifth_yr }}</router-link
              >
            </td>
            <td>
              <router-link to="" style="text-decoration: none; color: inherit">{{
                library.status
              }}</router-link>
            </td>
            <td>
              <b-icon
                icon="pen"
                @click="approved(library.id)"
                variant="success"
              ></b-icon>
            </td>
          </tr>
        </tbody>
      </table>
      <small v-else>
        <p class="text-center text-dark">
          There is no pending library dues to be approved
        </p>
      </small>
  
      <!-- add modal ---->
  
      <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
      <!-- end of add modal --->
    </main>
  </template>
  <script>
  export default {
    name: "approvelibraryfees",
    props: ["pendinglibrary"],
    methods: {
      approved(id) {
        this.$emit("Id", id);
      },
    },
  };
  </script>
  