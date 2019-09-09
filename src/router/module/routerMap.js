import Layout from "@/views/layout";

export default [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home.vue"),
        meta: {
          title: "首页"
        }
      }
    ]
  }
];
