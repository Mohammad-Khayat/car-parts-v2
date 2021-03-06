
export default [

  {
    redirect: "home",
    path: "/",
  },
  {
    name: "home",
    path: "home",
    components: {
      default: () => import("../modules/home/home.vue"),
    },

    meta: {
      pageTitle: "الرئيسية",
      breadcrumb: [
        {
          name: "الرئيسية",
          path: "/admin",
          icon: "fas fa-home",
        },
      ],
    },
  },

  {
    name: "cars",
    path: "cars",
    components: {
      default: () => import("../modules/cars/Cars.vue"),
      // actions: () =>
      //   import("@admin/cars"),
    },

    meta: {
      pageTitle: "السيارات",
      breadcrumb: [
        {
          name: "الرئيسية",
          path: "/admin",
          icon: "fas fa-home",
        },
        {
          name: "السيارات",
          path: "/cars",
          icon: "fas fa-car",
        },
      ],
    },
  },
  {
    name: "CarDetails",
    path: "cars/:id",
    props: true,
    component: () => import("../modules/cars/Cars.vue"),
    meta: {
      pageTitle: "الرئيسية",
      breadcrumb: [
        {
          name: "الرئيسية",
          path: "/admin",
          icon: "fas fa-home",
        },
        {
          name: "السيارات",
          path: "/cars",
          icon: "fas fa-car",
        },
      ],
    },
  },

  {
    name: "Categories",
    path: "categories",
    components: {
      default: () => import("../modules/categories/categories.vue"),
    },
    meta: {
      pageTitle: "الرئيسية",
      breadcrumb: [
        {
          name: "الرئيسية",
          path: "/admin",
          icon: "fas fa-home",
        },
        {
          name: "التصنيفات",
          path: "/cars",
          icon: "fas fa-car",
        },
      ],
    },
  },

  // {
  //   path: "products",
  //   name: "Products",
  //   components: {
  //     default: () => import("../views/admin/pages/products/Products.vue"),
  //     actions: () =>
  //       import("../views/admin/pages/products/components/ProductAction.vue"),
  //   },
  //   meta: {
  //     pageTitle: "جميع القطع",
  //     breadcrumb: [
  //       {
  //         name: "الرئيسية",
  //         path: "/admin",
  //         icon: "fas fa-home",
  //       },
  //       {
  //         name: "المخزن",
  //         path: "/admin/products",
  //         icon: "fas fa-home",
  //       },
  //     ],
  //   },
  // },
  // {
  //   path: "products/:id",
  //   name: "Products",
  //   props: true,
  //   components: {
  //     default: () =>
  //       import("../views/admin/pages/products/components/ProductDetails.vue"),
  //   },
  //   meta: {
  //     pageTitle: "التفاصيل",
  //     breadcrumb: [
  //       {
  //         name: "الرئيسية",
  //         path: "/admin",
  //         icon: "fas fa-home",
  //       },
  //       {
  //         name: "المخزن",
  //         path: "/admin/products",
  //         icon: "fas fa-home",
  //       },
  //     ],
  //   },
  // },
]