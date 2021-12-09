// import axios from "axios";
export default {
    state: {
      categories: [
        {
          id: 1,
          name: "قطع محرك",
          quantity: "35",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/BMW_S85B50_Engine.JPG",
        },
        {
          id: 2,
          name: "قطع دوزان",
          quantity: "35",
          image:
            "https://di-uploads-pod14.dealerinspire.com/toyotaoforlando/uploads/2019/04/car-parts.jpg",
        },
        {
          id: 3,
          name: "قطع بودي",
          quantity: 20,
          image:
            "https://images.caricos.com/m/mercedes-benz/2014_mercedes-benz_s-class/images/1920x1080/2014_mercedes-benz_s-class_50_1920x1080.jpg",
        },
      ],
      categoryDto: {
        name: "",
        image: null,
      },
    },
    mutations: {
      Add_Category(state, payload) {
        state.categories.unshift(payload);
      },
      Set_Categories() {},
  
      Update_Category() {},
      Delete_Category(state, payload) {
        state.categories = state.categories.filter((el) => el.id != payload.id);
      },
      Set_Category_Dto(state, payload) {
        state.categoryDto = payload;
      },
    },
    actions: {
      async addCategory({ commit }, payload) {
        // let res = await  axios.post('');
        commit("Add_Category", payload);
      },
      async getCategories({ commit }, payload) {
        // let res = await  axios.get('');
        commit("Set_Categories", payload);
      },
      async updateCategory({ commit }, payload) {
        commit("Update_Category", payload);
      },
      async deleteCategory({ commit }, payload) {
        commit("Delete_Category", payload);
      },
    },
  };