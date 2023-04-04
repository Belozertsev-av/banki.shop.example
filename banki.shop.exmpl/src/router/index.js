import {createRouter, createWebHistory} from "vue-router";
import bsCatalog from "../components/BsCatalog.vue";
import bsCart from "../components/BsCart.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'BsCatalog',
            component: bsCatalog,
        },
        {
            path: '/cart',
            name: 'BsCart',
            component: bsCart,
        },
    ],
})
export default router