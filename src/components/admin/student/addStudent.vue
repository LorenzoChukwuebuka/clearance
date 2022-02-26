<template>
  <main>
    <div class="input-group mb-3 w-50  mx-auto">
      <button
        v-b-modal.modal-1
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
      >
        Add student
      </button>

      <input
        type="text"
        class="form-control"
        placeholder="Search Student"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>

    <!-- add modal ---->

    <b-modal id="modal-1" hide-footer title="Add Student">
      <div class=" bg-dark" v-if="error.length">
        <span v-for="(err, index) in error" :key="index">
          <b-alert show variant="danger" dismissible> {{ err }} </b-alert>
        </span>
      </div>

      <label class="mb-2 "> Department </label>
      <div class="input-group input-group-sm mb-3">
        <b-form-select
          class="px-2 py-2 pb-2 mt-1 mb-3 w-100"
          v-model="form.deptId"
        >
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- select Department --</b-form-select-option
            >
          </template>
          <option
            v-for="dept in depts"
            :key="dept.id"
            :value="dept.id"
            class="px-2 py-2"
          >
            {{ dept.department }}
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
        <label class="mb-2 mt-1"> registeration Number </label>
        <input
          v-model="form.regnum"
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

      <button class="btn btn-primary" @click="submit">Submit</button>
    </b-modal>
    <!-- end of add modal --->
  </main>
</template>

<script>
export default {
  name: 'addStudent',
  data () {
    return {
      error: [],
      form: {
        name: '',
        regnum: '',
        password: '',
        deptId: ''
      }
    }
  },
  props: ['depts'],
  methods: {
    submit (e) {
      e.preventDefault()
      if (!this.form.name && !this.form.regnum && !this.form.password) {
        return this.error.push('Invalid input')
      } else {
        this.$emit('form', this.form)
      }
    }
  }
}
</script>
