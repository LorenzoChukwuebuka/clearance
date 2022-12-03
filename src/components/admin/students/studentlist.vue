<template>
    <main>
      <!-- <h4 class="text-dark text-center">Approved library Clearance </h4> -->
      <table
        class="table table-responsive mt-5 text-dark"
        v-if="allstudents.length != 0"
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Registration no</th>
            <th scope="col">Supervisor</th>
            <th scope="col">Dept Admin</th>
            <th scope="col">Course Adviser</th>
            <th scope="col">Grad. Year</th>
            <th scope="col"> Department</th>
            <th scope="col"> Approve </th>
            
          </tr>
        </thead>
  
        <tbody
          v-for="(student, index) in allstudents"
          :key="index"
          :value="student.id"
        >
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.reg_number }}</td>
            <td>{{ student.project_supervisor }}</td>
            <td>{{ student.dept_admin }}</td>
            <td>{{ student.course_adviser }}</td>
            <td>{{ student.grad_year }}</td>
            <td>{{ student.department }}</td>
            <td>
            <b-icon
              icon="pen"
              @click="approved(student.id)"
              variant="success"
            ></b-icon>
          </td>
            
          </tr>
        </tbody>
      </table>
      <small v-else>
        <p class="text-center text-dark">There are no students to be cleared</p>
      </small>
  
      <!-- add modal ---->
  
      <b-modal id="modal-2" hide-footer title="Edit Department"> </b-modal>
      <!-- end of add modal --->
    </main>
  </template>
  <script>
  export default {
    name: "studentlist",
    props: ["allstudents"],
    methods:{
      approved(id){
        this.$emit("Id", id);
      }
    }
  };
  </script>
  