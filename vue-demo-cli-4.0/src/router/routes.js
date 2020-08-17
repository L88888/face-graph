export default  [
    {
      path: "/",
      name: "colorDemo",
      component: () => import("@/views/colorDemo1.vue")
    },
    {
      path: "/relationChart",
      name: "relationChart",
      component: () => import("@/views/relationChart.vue")
    },
    {
      path: "/relationEcharts",
      name: "relationEcharts",
      component: () => import("@/views/relationEcharts.vue")
    },
  ];