<template>
  <main>
    <div class="input-group mb-3 w-50 mx-auto">
      <button
        v-b-modal.modal-1
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
      >
        Upload School Fees Receipts
      </button>

      <input
        type="text"
        class="form-control"
        placeholder="Search Receipts"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>

    <!-- add modal ---->

    <b-modal id="modal-1" hide-footer title="Upload file">
      <form enctype="multipart/form-data">
        <div class="bg-dark" v-if="error.length">
          <span v-for="(err, index) in error" :key="index">
            <b-alert show variant="danger" dismissible> {{ err }} </b-alert>
          </span>
        </div>

        <div class="bg-dark" v-if-else="success.length">
          <span v-for="(suc, index) in success" :key="index">
            <b-alert show variant="danger" dismissible> {{ suc }} </b-alert>
          </span>
        </div>

        <div class="input-group input-group-sm mb-3">
          <label class="mb-2 mt-1">
            Upload School Fees
            <br />
            <small> Please choose 5 files at once </small></label
          >

          <input
            type="file"
            ref="file"
            @change="handleFile()"
            class="form-control px-2 py-2 pb-2 mt-1 mb-3 w-100"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            multiple
          />
        </div>

        <button class="btn btn-primary" @click="submit">Submit</button>
      </form>
    </b-modal>
    <!-- end of add modal --->
  </main>
</template>

<script>
export default {
  name: "addschfees",
  data() {
    return {
      form: {},
      error: [],
      images: [],
      success: [],
      id: localStorage.getItem("Id"),
    };
  },

  methods: {
    handleFile() {
      for (let i = 0; i < this.$refs.file.files.length; i++) {
        this.images.push(this.$refs.file.files[i]);
      }
    },
    submit(e) {
      e.preventDefault();
      let formData = new FormData();

      var self = this;

      if (self.images.length < 5 || self.images.length > 5) {
        return self.error.push("Select 5 files only");
      }

      for (let i = 0; i < self.images.length; i++) {
        let file = self.images[i];

        formData.append("myfile", file);
      }
      formData.append("studentId", self.id);

      self.$http
        .post(`${this.$PORT}SchFees`, formData)
        .then((res) => {
          if (res.data.message === "inserted successfully") {
            self.success.push(res.data.message);
          }

          if (res.data.message === "Already submitted") {
            alert("Already submitted");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
