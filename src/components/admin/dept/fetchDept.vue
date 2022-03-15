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
              @click="startEdit(dept)"
              v-b-modal.modal-2
            ></b-icon>
          </td>
          <td>
            <b-icon
              icon="trash"
              @click="deleteDept(dept.id)"
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

    <!-- add modal ---->

    <b-modal id="modal-2" hide-footer title="Edit Department">
      <div class=" bg-dark" v-if="error.length">
        <span v-for="(err, index) in error" :key="index">
          <b-alert show variant="danger" dismissible> {{ err }} </b-alert>
        </span>
      </div>

      <label class="mb-2 "> School </label>
      <div class="input-group input-group-sm mb-3">
        <b-form-select
          class="px-2 py-2 pb-2 mt-1 mb-3 w-100"
          v-model="edit.schId"
        >
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- select school --</b-form-select-option
            >
          </template>
          <option
            class="px-2 py-2"
            v-for="school in schools"
            :key="school.id"
            :value="school.id"
          >
            {{ school.school }}
          </option>
        </b-form-select>
      </div>
      <div class="input-group input-group-sm mb-3">
        <label class="mb-2 mt-1"> Department </label>
        <input
          v-model="edit.dept"
          type="text"
          class="form-control px-2 py-2 pb-2 mt-1 mb-3 w-100"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <button class="btn btn-primary" @click="submitEdit">Submit</button>
    </b-modal>
    <!-- end of add modal --->
  </main>
</template>

<script>
export default {
  name: 'fetchdeptComponent',
  data () {
    return {
      edited: null,
      error: [],
      edit: {
        dept: '',
        schId: '',
        id: ''
      }
    }
  },
  props: ['depts', 'schools'],
  methods: {
    deleteDept (id) {
      this.$emit('Id', id)
    },
    startEdit (dept) {
      this.edited = dept
      this.edit.id = this.edited.id
      this.edit.schId = this.edited.school_id
      this.edit.dept = this.edited.department
    },
    submitEdit () {
      if (!(this.edit.id && this.edit.dept && this.edit.schId)) {
        this.error.push('Incorrect input')
      } else {
        this.$emit('edit', this.edit)
      }
    }
  }
}
</script>

<style></style>
