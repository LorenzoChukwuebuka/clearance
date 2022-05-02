<template>
  <main>
    <h4 class="text-dark text-center"></h4>
    <table class="table mt-5 text-dark" v-if="pending_form.length != 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Reg Number</th>
          <th scope="col">Course Adviser</th>
          <th scope="col">Project supervisor</th>
          <th scope="col">Grad. Year</th>
          <th scope="col">Dept. Admin</th>
          <th scope="col">Department</th>
          <th scope="col">Date created</th>
          <th scope="col">status</th>
 
        </tr>
      </thead>

      <tbody
        v-for="(pending, index) in pending_form"
        :key="index"
        :value="pending.id"
      >
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ pending.name }}</td>
          <td>{{ pending.reg_number }}</td>
          <td>{{ pending.course_adviser }}</td>
          <td>{{ pending.project_supervisor }}</td>
          <td>{{ pending.grad_year }}</td>
          <td>{{ pending.dept_admin }}</td>
          <td>{{ pending.department }}</td>
          <td>{{ pending.date_created }}</td>

          <td>
          {{ pending.status }}  <b-icon icon="pen" @click="approved(pending.id)" variant="success"></b-icon>
          </td>
           
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">You have not added any courses yet</p>
    </small>
  </main>
</template>
<script>
export default {
  name: "approveclearanceform",
  props: ["pending_form"],

  methods:{
	  approved(id){
          console.log(id)
	  }
  }
};
</script>
