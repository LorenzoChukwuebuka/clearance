<template>
  <main>
    <h4 class="text-dark text-center">Admins</h4>
    <table class="table mt-5 text-dark" v-if="admins.length != 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>

      <tbody v-for="(admin, index) in admins" :key="index" :value="admin.id">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ admin.name }}</td>
          <td>{{ admin.type }}</td>

          <td>
            <b-icon
              icon="pen"
              variant="success"
              @click="startedit(admin)"
              v-b-modal.modal-2
            ></b-icon>
          </td>
          <td>
            <b-icon
              icon="trash"
              @click="deladmin(admin.id)"
              variant="danger"
            ></b-icon>
          </td>
        </tr>
      </tbody>
    </table>
    <small v-else>
      <p class="text-center text-dark">
        You have not added any admins yet
      </p>
    </small>

    <b-modal id="modal-2" hide-footer title="Edit Admins">
      <div class=" bg-dark" v-if="error.length">
        <span v-for="(err,index) in error" :key="index">
          <b-alert show variant="danger" dismissible> {{ err }} </b-alert>
        </span>
      </div>

      <label class="mb-2 "> School </label>
      <div class="input-group input-group-sm mb-3">
        <b-form-select
          class="px-2 py-2 pb-2 mt-1 mb-3 w-100"
          v-model="edit.type"
        >
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- select type --</b-form-select-option
            >
          </template>
          <option class="px-2 py-2" value="1">
            Admin 1
          </option>
          <option class="px-2 py-2" value="2">
            Admin 2
          </option>
          <option class="px-2 py-2" value="3">
            Admin 3
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

      <button class="btn btn-primary" @click="editAd">Submit</button>
    </b-modal>
  </main>
</template>

<script>
export default {
  name: 'fetchAdmin',
  props: ['admins'],
  data () {
    return {
      edited: null,
      error: [],
      edit: {
        name: '',
        type: '',
        id: ''
      }
    }
  },
  methods: {
    deladmin (id) {
      this.$emit('Id', id)
    },
    startedit (admin) {
      this.edited = admin
      this.edit.id = this.edited.id
      this.edit.type = this.edited.type
      this.edit.name = this.edited.name
    },

    editAd (e) {
      e.preventDefault()
      this.$emit('edit', this.edit)
    }
  }
}
</script>

<style></style>
