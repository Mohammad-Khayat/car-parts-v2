<template>
  <div class="cars">
      <b-container fluid>
          <b-row class="my-3">
              <b-col cols="12" md="6" lg="4">
                  <b-input class="shadow-sm border-0 rounded-20" placeholder="ابحث عن سيارة" v-model="query"></b-input>
              </b-col>
          </b-row>
           <b-row>
              <b-col cols="12" md="6" lg="4" xl="3" class="my-3 my-md-0"  v-for="car in search(cars,['name','country','maker'],query)" :key="car.id" >
                  <car-card :car="car"></car-card>
              </b-col>
          </b-row>
      </b-container>
    <vue-modal  bodyClass="dialog-style">
        <car-form ></car-form>

    </vue-modal>

  </div>
</template>

<script>
import {mapState , mapActions} from 'vuex'
import search from '@/functions/search.js'
import CarCard from './components/CarCard.vue'
import CarForm from './components/CarForm.vue'
 export default {
    components:{
        CarCard,
        CarForm
    },
    data(){
        return{
            query:''
        }
    },
    computed:{
        ...mapState({cars:({cars})=>cars.cars , countries:({data})=>data.countries,brands:({data})=>data.brands})
    },
    methods:{
        ...mapActions(['getCars']),
        search
    },
    created(){
        // this.getCars();
     }
}
</script>

<style lang='scss'>
.dialog-style{
    min-width: 60%;
    @media (max-width:768px) {
        min-width: 90%;
    }
}
</style>