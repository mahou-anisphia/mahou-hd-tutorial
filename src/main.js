import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import ShoppingCart from "./pages/ShoppingCart.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import DetailPage from "./pages/ProductDetailPage.vue";
import NotFound from "./pages/NotFoundPage";
import "./main.css";

//import "bootstrap/dist/css/bootstrap.css";
createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/cart",
          component: ShoppingCart,
        },
        {
          path: "/products",
          component: ProductsPage,
        },
        {
          path: "/products/:id",
          component: DetailPage,
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFound,
        },
      ],
    })
  )
  .mount("#app");
