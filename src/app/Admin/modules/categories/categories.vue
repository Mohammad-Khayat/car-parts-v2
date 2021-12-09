<template>
  <div>
      <b-container fluid>
      <vue-modal width='30' height='50' title="اضافة تصنيف">
        <ValidationObserver>
          <b-form-group>
          <label for="">اسم التصنيف</label>
          <ValidationProvider rules='required'  name='name'>
          <b-input placeholder="ادخل اسم التصنيف"></b-input>
           </ValidationProvider>
          </b-form-group>
          <b-form-group>
          <label for="">صورة التصنيف</label>
          <input-image placeholder="ادخل اسم التصنيف"></input-image>
          </b-form-group>
        </ValidationObserver>
       </vue-modal>

       <b-row>
         <b-col md="4"  v-for="category in categories " :key="category.id">
           <b-card>
        
             <b-img :src="category.image " class="w-50" style="height:200px; object-fit:cover">

             </b-img>
           </b-card>
         </b-col>
      </b-row>
      </b-container>
     <!--commit-->
  
   
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    computed:{
      ...mapState({categories:({categories})=>categories.categories})
    }
}
</script>

 