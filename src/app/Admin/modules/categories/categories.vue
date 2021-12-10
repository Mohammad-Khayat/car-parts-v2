<template>
  <div class="categories">
      <b-container fluid>

        
      <vue-modal width='30' height='50' title="اضافة تصنيف" ref="categoryModal">
       
        <ValidationObserver>
          <b-row>
            <b-col cols="12">

          <b-form-group>
          <label for="">اسم التصنيف</label>
          <ValidationProvider rules='required'  name='name'>
          <b-input placeholder="ادخل اسم التصنيف" v-model="form.name"></b-input>
           </ValidationProvider>
          </b-form-group>
            </b-col>
            <b-col>
          <b-form-group class="w-100" >
          <label for="">صورة التصنيف</label>
          <input-image placeholder="ادخل اسم التصنيف " v-model="form.image" ></input-image>
          </b-form-group>
            </b-col>
          </b-row>
        </ValidationObserver>


        </vue-modal>

       <b-row>
         <b-col cols="12" class="my-4"  md="4"  v-for="category in categories " :key="category.id">
          
 
          <overlay-card :image='category.image' overlayClass='p-1 text-light position-relative'>
            <div class="fit flex-center ">
              <b-nav-item class="text-light">
              <h1 class="text-light">{{category.name}}</h1>
              </b-nav-item>
              <action-btn variant='danger' style="height:50px; width:50px" type="delete" class="position-absolute  rounded-20 bottom-left"></action-btn>
              <action-btn variant='primary' style="height:50px; width:50px" type="edit" class="position-absolute  rounded-20 bottom-right" @click="showDialog(category)"></action-btn>
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
  data(){
    return{
      form:{
      name: "",
      image: null,
      }
    }
  },
    computed:{
      ...mapState({categories:({categories})=>categories.categories} )
    },
    methods:{
      setForm(category){
        this.form={...category}
      },
      showDialog(cate){
        console.log(cate)
        this.setForm(cate)
        this.$refs.categoryModal.open()
      }
    }
}
</script>


<style lang="scss">
.categories{

}
</style>

 