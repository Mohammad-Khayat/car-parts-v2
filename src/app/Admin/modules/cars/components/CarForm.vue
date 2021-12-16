<template>
  <div class="car-form">
                <vue-modal  bodyClass="dialog-style rounded-20 w-50" title="اضافة سيارة" ref="modal">


            

       <ValidationObserver>

          <b-row>

              <b-col cols="6"> 
          <ValidationProvider>
              <div class="form-group">
              <label for=""> اسم السيارة</label>
              <b-input class="rounded-20" placeholder="أدخل اسم السيارة" v-model="carDto.name"></b-input>
              </div>
          </ValidationProvider>
              </b-col>

              <b-col cols="6"> 
          <ValidationProvider>
              <div class="form-group">
              <label for=""> سنة التصنيع</label>
              <b-input v-model="carDto.model" class="rounded-20" placeholder="أدخل سنة التصنيع"></b-input>
              </div>
          </ValidationProvider>
              </b-col>

              <b-col cols="6"> 
          <ValidationProvider>
              <div class="form-group">
                  <label for="">أختر بلد المنشأ</label>
                 <vue-select v-model="carDto.country" class="rounded-20" :options="countries" ></vue-select>
               </div>
          </ValidationProvider>
              </b-col>

              <b-col cols="6"> 
          <ValidationProvider>
              <div class="form-group">
                  <label for="">أختر الشركة المصنعة</label>
                  <vue-select class="rounded-20" v-model="carDto.maker" :labelKey="'name'" :valueKey="'name'"  :options="brands"></vue-select>
               </div>
          </ValidationProvider>
              </b-col>

            <b-col cols="6">

        <input-image :label="'صورة السيارة'" :value="carDto.image"></input-image>      
            </b-col>

          </b-row>



      </ValidationObserver>

        <template #footer>
            <b-button class="rounded-20">اضافة <fa icon='fas fa-plus'></fa></b-button>
        </template>

  
                </vue-modal>
  </div>
  
</template>

<script>
import VueSelect from '@/global-components/VueSelect.vue'
import InputImage from '@/global-components/InputImage.vue'
import { mapState } from 'vuex'
export default {
  components: { VueSelect, InputImage },


computed:{
  ...mapState({carDto:({cars})=>cars.carDto , countries:({data})=>data.countries , brands:({data})=>data.brands})
},
methods:{
  openModal(){
    this.$refs.modal.open()
  }
}
}
</script>

<style lang='scss'>
.car-form{


}

</style>