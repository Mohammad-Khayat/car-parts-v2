<template>
  <div class="car-form">

      <VaidationObserver>

          <b-row>

              <b-col cols="6"> 
          <ValidationProvider>
              <div class="form-group">
              <label for=""> اسم السيارة</label>
              <b-input class="rounded-20" placeholder="أدخل اسم السيارة"></b-input>
              </div>
          </ValidationProvider>
              </b-col>

              <b-col cols="6"> 
          <ValidationProvider>
              <div class="form-group">
                  <label for="">أختر بلد المنشأ</label>
                 <vue-select class="rounded-20" ></vue-select>
               </div>
          </ValidationProvider>
              </b-col>


          </b-row>



      </VaidationObserver>



  </div>
</template>

<script>
import VueSelect from '@/global-components/VueSelect.vue'
export default {
  components: { VueSelect },

}
</script>

<style lang='scss'>
.car-form{


}

</style>