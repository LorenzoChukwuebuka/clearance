<template>
  <main>
    <div class="input-group mb-3 w-50  mx-auto">
      <button
        v-b-modal.modal-1
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
      >
        Add Admin
      </button>

      <input
        type="text"
        class="form-control"
        placeholder="Search Courses"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>

    <!-- add modal ---->

    <b-modal id="modal-1" hide-footer title="Add Department">
      <div class=" bg-dark" v-if="error.length">
        <span v-for="err in error">
          <b-alert show variant="danger" dismissible> {{ err }} </b-alert>
        </span>
      </div>

      <label class="mb-2 "> School </label>
      <div class="input-group input-group-sm mb-3">
        <b-form-select
          class="px-2 py-2 pb-2 mt-1 mb-3 w-100"
          v-model="form.type"
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
          v-model="form.name"
          type="text"
          class="form-control px-2 py-2 pb-2 mt-1 mb-3 w-100"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div class="input-group input-group-sm mb-3">
        <label class="mb-2 mt-1"> password </label>
        <input
          v-model="form.password"
          type="password"
          class="form-control px-2 py-2 pb-2 mt-1 mb-3 w-100"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <button class="btn btn-primary" @click="submit">Submit</button>
    </b-modal>
    <!-- end of add modal --->
  </main>
</template>

<script>
export default {
  name: 'addAdmin',
  data () {
    return {
      error: [],
      form: {
        type: '',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()
      if (!this.form.name && !this.form.type && !this.form.password) {
        return this.error.push('Invalid input')
      } else {
        this.$emit('form',this.form)
      }
    }
  }
}
</script>
