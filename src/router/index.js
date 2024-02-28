import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../components/EnterpriseAdmin.vue")
    },
    {
        path: "/EnterpriseAdmin",
        name: "EnterpriseAdmin",
        component: () => import("../components/EnterpriseAdmin.vue")
    },
    {
        path: "/EnterpriseLogin",
        name: "EnterpriseLogin",
        component: () => import("../components/EnterpriseLogin.vue")
    },
    {
        path: "/OrganizationEnter",
        name: "OrganizationEnter",
        component: () => import("../components//OrganizationEnter.vue")
    },
    {
        path: "/OrganizationAdmin",
        name: "OrganizationAdmin",
        component: () => import("../components//OrganizationAdmin.vue")
    },
    {
        path: "/OrganizationMemberAdmin",
        name: "OrganizationMemberAdmin",
        component: () => import("../components//OrganizationMemberAdmin.vue")
    }
]
const router = new VueRouter({
    routes,
    mode: "history"
});

export default router
