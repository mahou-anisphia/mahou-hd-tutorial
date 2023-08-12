import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import ShoppingCart from "./pages/ShoppingCart.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import DetailPage from "./pages/ProductDetailPage.vue";
import NotFound from "./pages/NotFoundPage";
import "./main.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuOyzmB_Kv_uHb22g_6ZXtItXc46HodCw",
  authDomain: "mah-vue-site.firebaseapp.com",
  projectId: "mah-vue-site",
  storageBucket: "mah-vue-site.appspot.com",
  messagingSenderId: "834578622350",
  appId: "1:834578622350:web:66a1bdb68b277ca38e26df",
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
          path: "/",
          redirect: "/products",
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFound,
        },
      ],
    })
  )
  .mount("#app");
