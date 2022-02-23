<template>
  <main>
    <adminnav msg="Admin Dashboard" />

    <main>
      <div class="container-fluid mt-2">
        <h4 class="text-dark text-center">Add Admin</h4>

         <addAdmin @form="submitForm" />

        <div class="row justify-content-center mt-5">
          <div class="container col-8 ">
            <div class=" bg-dark" v-if="success.length">
              <span v-for="suc in success">
                <b-alert show variant="danger" dismissible>
                  {{ suc }}
                </b-alert>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </main>
</template>

<script>
import adminnav from '@/components/admin/adminnav.vue'
import addAdmin from '@/components/admin/adminComp/addAdmin.vue'
export default {
  name: 'createAdmin',
  components: {
    adminnav,addAdmin
  },
  data(){
      return{
          success:[]
      }
  },
  methods:{
      submitForm(form){
          this.$http.post('http://localhost:8000/')
      }
  }
}
</script>

<style></style>
