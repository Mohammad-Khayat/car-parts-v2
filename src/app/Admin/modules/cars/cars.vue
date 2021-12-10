<template>
  <div class="cars">
      <b-container fluid>
          <b-row class="my-3">
              <b-col cols="4">
                  <b-input class="shadow-sm border-0 rounded-20" placeholder="ابحث عن سيارة"></b-input>
              </b-col>
          </b-row>
           <b-row>
              <b-col cols="3" v-for="car in cars" :key="car.id" >
                  <car-card :car="car"></car-card>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import {mapState , mapActions} from 'vuex'
import search from '@/functions/search.js'
import CarCard from './components/CarCard.vue'
export default {
    components:{
        CarCard
    },
    computed:{
        ...mapState({cars:({cars})=>cars.cars , countries:({data})=>data.countries,brands:({data})=>data.brands})
    },
    methods:{
        ...mapActions(['getCars'])
    },
    created(){
        // this.getCars();
        console.log(search(this.cars, ['name' , 'maker' , 'brand' ], 'Sonata'))
    }
}
</script>

<style>

</style>