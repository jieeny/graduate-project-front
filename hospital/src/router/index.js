import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/login.vue"
import Index from "../components/index.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/doctor",
        name: "index",
        redirect: '/doctor/leftMenu',
        component: () =>
            import ("../views/index.vue"),
        children: [{
                path: "leftMenu",
                name: "leftMenu",
                component: () =>
                    import ("../views/coverSolt.vue"),
                redirect: '/doctor/leftMenu/indexChildren',
                children: [{
                        path: "indexChildren",
                        name: "indexChildren",
                        component: () =>
                            import ("../views/index/indexChildren.vue")
                    },
                    {
                        path: "healed",
                        name: "healed",
                        component: () =>
                            import ("../views/heal/healed.vue")
                    },
                    {
                        path: "healing",
                        name: "healing",
                        component: () =>
                            import ("../views/heal/healing.vue")
                    },
                    {
                        path: "waitingHeal",
                        name: "waitingHeal",
                        component: () =>
                            import ("../views/heal/waitingHeal.vue")
                    },
                    {
                        path: "userInfo",
                        name: "userInfo",
                        redirect: '/doctor/leftMenu/userInfo/personInfo',
                        component: () =>
                            import ("../views/user/userInfo.vue"),
                        children: [{
                                path: "personInfo",
                                name: "personInfo",
                                component: () =>
                                    import ("../views/user/children/personInfo.vue"),
                            },
                            {
                                path: "userImg",
                                name: "userImg",
                                component: () =>
                                    import ("../views/user/children/userImg.vue"),
                            },
                            {
                                path: "accountInfo",
                                name: "accountInfo",
                                component: () =>
                                    import ("../views/user/children/accountInfo.vue"),
                            },
                            {
                                path: "updateUser",
                                name: "updateUser",
                                component: () =>
                                    import ("../views/user/children/updateUser.vue"),
                            },
                        ]
                    },
                    {
                        path: "waitReporting",
                        name: "waitReporting",
                        component: () =>
                            import ("../views/reporting/waitReporting.vue")
                    },
                    {
                        path: "prescription",
                        name: "prescription",
                        component: () =>
                            import ("../views/prescription/prescription.vue")
                    },
                    {
                        path: "checkPrescription",
                        name: "checkPrescription",
                        component: () =>
                            import ("../views/prescription/checkPrescription.vue")
                    },
                    {
                        path: "openPrescription",
                        name: "openPrescription",
                        component: () =>
                            import ("../views/prescription/openPrescription.vue")
                    },
                    {
                        path: "Scheduling",
                        name: "Scheduling",
                        component: () =>
                            import ("../views/scheduling/Scheduling.vue")
                    },
                ]
            },
            {
                path: "chat",
                name: "chat",
                component: () =>
                    import ("../views/chat/chat.vue")
            }

        ]

    },
    {
        path: "/user",
        name: "userIndex",
        component: Index
    },
    {
        path: "/",
        name: "login",
        component: Login
    }
];

const router = new VueRouter({
    routes
});

export default router;