<template>
  <div class="categories">
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
          
 
          <overlay-card :image='category.image' overlayClass='p-1 text-light position-relative'>
            <div class="fit flex-center ">
              <h1>{{category.name}}</h1>
              <action-btn variant='danger' type="delete" class="position-absolute bottom-left rounded-circle"></action-btn>
            </div>

          </overlay-card>
          </b-col>
      </b-row>
      </b-container>
     <!--commit-->
  
   
  </div>
</template>

<script>
import ActionBtn from '@/global-components/ActionBtn.vue'
import { mapState } from 'vuex'
  export default {
  components: { ActionBtn },
    computed:{
      ...mapState({categories:({categories})=>categories.categories})
    }
}
</script>


<style lang="scss">
.categories{

}
</style>

 