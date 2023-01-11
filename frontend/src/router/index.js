import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/views/HomePage'
import Item from '@/views/ItemPage'
import AdminPage from '@/views/AdminPage'


const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/admin",
        name: "Admin",
        component: AdminPage,
    },
    {
        path: "/item/:id",
        name: "Item",
        component: Item,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

export default router