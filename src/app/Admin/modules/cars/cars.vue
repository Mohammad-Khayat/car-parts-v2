<template>
  <div class="cars">
      <b-container fluid>
          {{countries}}
          <b-row>
              <b-col cols="3" v-for="car in cars" :key="car.id" >
                  <b-card class="  shadow-sm rounded-20 overflow-hidden border-0 bg-light" body-class="p-0" header-bg-variant="white" header-class="p-2 border-0 shadow-sm ">
                      <template #header>
                          <h6>
                              {{car.name}}
                              </h6>

                      </template>
                       <b-img class="w-100 ob-cover h200px"  :src="car.image" >
                      </b-img>
                  </b-card>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState({cars:({cars})=>cars.cars , countries:({data})=>data.countries,brands:({data})=>data.brands})
    }
}
</script>

<style>

</style>