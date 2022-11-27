<template>
  <main>
    <div class="input-group mb-3 w-50 mx-auto">
      <button
        v-b-modal.modal-1
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
      >
        Add Department
      </button>

      <input
        type="text"
        class="form-control"
        placeholder="Search Departments"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>

    <!-- add modal ---->

    <b-modal id="modal-1" hide-footer title="Add Department">
      <div class="bg-dark" v-if="error.length">
        <span v-for="(err, index) in error" :key="index">
          <b-alert show variant="danger" dismissible> {{ err }} </b-alert>
        </span>
      </div>

      <label class="mb-2"> School </label>
      <div class="input-group input-group-sm mb-3">
        <b-form-select
          class="px-2 py-2 pb-2 mt-1 mb-3 w-100"
          v-model="form.schId"
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
          v-model="form.dept"
          type="text"
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
  name: "addDept",
  data() {
    return {
      form: {
        dept: "",
        schId: "",
      },
      error: [],
    };
  },
  props: ["schools"],

  methods: {
    submit(e) {
      if (!(this.form.dept && this.form.schId)) {
        this.error.push("Invalid inputs");
      } else {
        this.$emit("form", this.form);
      }
    },
  },
};
</script>

<style></style>
