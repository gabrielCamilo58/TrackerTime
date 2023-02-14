import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes : RouteRecordRaw[] = [{
    path: '/',
    name: 'Task',
    component: Ta
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;