import Products from "../components/pages/Products";
import Info from "../components/pages/Info";
import Contacts from "../components/pages/Contacts";
import Item from "../components/pages/Item";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/products'},
    {name: 'products', path: '/products', component: Products, props: (router) => ({link: router.query.link})},
    {name: 'info', path: '/info', component: Info},
    {name: 'contacts', path: '/contacts', component: Contacts},
    {name: 'item', path: '/item/:id', component: Item, props: true},
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;