<template>
  <main>
    <h4 class="text-dark text-center">Student</h4>
    <table class="table mt-5 text-dark" v-if="students.length != 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Department</th>
          <th scope="col">Registeration Number</th>
          <th scope="col">Registeration Date</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>

      <tbody
        v-for="(student, index) in students"
        :key="index"
        :value="student.id"
      >
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.department }}</td>
          <td>{{ student.reg_number }}</td>
          <td>{{ student.date_created }}</td>

          <td>
            <b-icon
              icon="pen"
              @click="editStudent(student)"
              variant="success"
              v-b-modal.modal-2
            ></b-icon>
          </td>
          <td>
            <b-icon
              icon="trash"
              @click="deleteStudent(student.id)"
              variant="danger"
            ></b-icon>
          </td>
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">
        You have not added any courses yet
      </p>
    </small>

    <b-modal id="modal-2" hide-footer title="Add Student">
      <div class=" bg-dark" v-if="error.length">
        <span v-for="(err, index) in error" :key="index">
          <b-alert show variant="danger" dismissible> {{ err }} </b-alert>
        </span>
      </div>

      <div class=" bg-dark" v-if-else="success.length">
        <span v-for="(suc, index) in success" :key="index">
          <b-alert show variant="success" dismissible>
            {{ suc }}
          </b-alert>
        </span>
      </div>

      <label class="mb-2 "> Department </label>
      <div class="input-group input-group-sm mb-3">
        <b-form-select
          class="px-2 py-2 pb-2 mt-1 mb-3 w-100"
          v-model="edit.deptId"
        >
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- select Department --</b-form-select-option
            >
          </template>
          <option
            v-for="de in depts"
            :key="de.id"
            :value="de.id"
            class="px-2 py-2"
          >
            {{ de.department }}
          </option>
        </b-form-select>
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="mb-2 mt-1"> Name </label>
        <input
          v-model="edit.name"
          type="text"
          class="form-control px-2 py-2 pb-2 mt-1 mb-3 w-100"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div class="input-group input-group-sm mb-3">
        <label class="mb-2 mt-1"> registeration Number </label>
        <input
          v-model="edit.regnum"
          type="number"
          class="form-control px-2 py-2 pb-2 mt-1 mb-3 w-100"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <!-- <div class="input-group input-group-sm mb-3">
        <label class="mb-2 mt-1"> password </label>
        <input
          v-model="form.password"
          type="password"
          class="form-control px-2 py-2 pb-2 mt-1 mb-3 w-100"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div> -->

      <button class="btn btn-primary" @click="startEdit">Submit</button>
    </b-modal>
    <!-- end of add modal --->
  </main>
</template>

<script>
export default {
  name: 'fetchStudent',
  props: ['students', 'depts', 'success'],
  data () {
    return {
      edit: {
        name: '',
        regnum: '',
        password: '',
        deptId: '',
        id: ''
      },
      edited: null,
      error: []
    }
  },
  methods: {
    deleteStudent (id) {
      if (confirm('Are you sure you want to delete this?')) {
        this.$emit('Id', id)
      }
    },
    editStudent (student) {
      this.edited = student
      this.edit.id = this.edited.id
      this.edit.name = this.edited.name
      this.edit.regnum = this.edited.reg_number
      this.edit.deptId = this.edited.department
    },
    startEdit (e) {
      e.preventDefault()

      if (!this.edit.regnum && !this.edit.name) {
        this.error.push('invalid input')
      } else {
        this.$emit('Form', this.edit)
      }
    }
  }
}
</script>

<style></style>
