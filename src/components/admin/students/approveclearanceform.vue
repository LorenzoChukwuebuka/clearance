<template>
  <main>
    <h4 class="text-dark text-center">Departments</h4>
    <table class="table mt-5 text-dark" v-if="depts.length != 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Department</th>
          <th scope="col">School</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>

      <tbody v-for="(dept, index) in depts" :key="index" :value="dept.id">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ dept.department }}</td>
          <td>{{ dept.school }}</td>

          <td>
            <b-icon
              icon="pen"
              variant="success"
 
              v-b-modal.modal-2
            ></b-icon>
          </td>
          <td>
            <b-icon
              icon="trash"
    
              variant="danger"
            ></b-icon>
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
    
}
</script>
