import Layout from "@/views/layout";

export default [
  {
    path: "/",
    component: Layout,
    redirect: "/",
    children: [
      {
        path: "/",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页"
        }
      }
    ]
  },
  {
    path: "/tool",
    component: Layout,
    redirect: "/tool",
    children: [
      {
        path: "/tool",
        component: () => import("@/views/tool/index.vue"),
        meta: {
          title: "工具导航"
        }
      }
    ]
  }
];
