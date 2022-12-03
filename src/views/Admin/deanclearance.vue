<template>
  <main>
    <adminnav msg="Admin Dashboard" />

    <div class="container-fluid mt-2">
      <h4 class="text-dark text-center">Student List</h4>

      <div class="row justify-content-center mt-5">
        <div class="container col-8">
          <studentlist :allstudents="allstudents" @Id="approve" />
          <!-- <br />
        <approveddeptdues :approveDeptDues="approveDeptDues" /> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import adminnav from "@/components/admin/adminnav.vue";
import studentlist from "@/components/admin/students/studentlist.vue";
export default {
  name: "deanclearance",
  components: {
    adminnav,
    studentlist,
  },
  data() {
    return {
      allstudents: [],
    };
  },
  mounted() {
    this.getAllStudents();
  },
  methods: {
    async getAllStudents() {
      try {
        let response = await this.$http.get(
          "http://localhost:8000/api/v1/allapprovedStudents"
        );
        this.allstudents = response.data.data;
      } catch (error) {}
    },

    async approve(Id) {
      try {
        if (window.confirm("Do you want to approve?")) {
          let data = {};

          data.admin = this.$id;
          data.id = Id;
          let response = await this.$http.post(
            "http://localhost:8000/api/v1/deanclearance",
            data
          );

          if ((response.data.code == 3)) {
            alert(response.data.message);
          }

		  if(response.data.code == 1){
			alert(response.data.message)
		  }
        }else{
			return 
		}
      } catch (error) {
		console.log(error)
	  }
    },

	async getClearedStudents(){
		try {
			
		} catch (error) {
			
		}
	}
  },
};
</script>

<style></style>
