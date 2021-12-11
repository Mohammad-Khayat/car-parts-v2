<template>
  <b-card
  footer-class="p-0 border-0 overflow-hidden"
    class="shadow rounded-20 overflow-hidden border-0 bg-light"
    body-class="p-0"
    header-bg-variant="white"
    header-class="p-2 border-0 shadow-sm "
  >
  
    <template #header>
      <div class="w-100 flex-between align-items-center">
        <action-btn :type="'details' " variant='outline-primary rounded-circle h40px w40px rounded'></action-btn>
        <h6 class="m-0">{{ car.name }} {{ car.model }}</h6>

      </div>
    </template>
    <b-img class="w-100 ob-cover h200px car-image" :src="car.image"> </b-img>
    <template #footer>
        <b-button class="fit p-2 rounded-0" variant="primary">
                عرض القطع <fa class="mx-2" icon='fas fa-gears'></fa>
        </b-button>

    </template>
 
  </b-card>
</template>

<script>
import ActionBtn from '@/global-components/ActionBtn.vue';
 export default {
  components: {ActionBtn   },
  
props:['car']


};
</script>

<style lang='scss'>
.car-image{
  cursor: pointer;
}

</style>