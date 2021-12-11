<template>
  <b-card
  footer-class="p-0 border-0 overflow-hidden"
    class="shadow-sm rounded-20 overflow-hidden border-0 bg-light"
    body-class="p-0"
    header-bg-variant="white"
    header-class="p-2 border-0 shadow-sm "
  >
    <template #header>
      <div class="w-100 flex-between">
        <h6 class="m-0">
          {{ car.country }}
        </h6>

        <h6 class="m-0">{{ car.name }} {{ car.model }}</h6>
      </div>
    </template>
    <b-img class="w-100 ob-cover h200px" :src="car.image"> </b-img>
    <template #footer>
        <b-button class="fit p-2 rounded-0" variant="primary">
                عرض القطع <fa class="mx-2" icon='fas fa-gears'></fa>
        </b-button>

    </template>
 
  </b-card>
</template>

<script>
export default {
  
props:['car']


};
</script>

<style>
</style>