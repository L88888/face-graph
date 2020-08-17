import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
import ViewUI from "view-design"

Vue.use(VueRouter);

const LOGIN_PAGE_NAME = "login";

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

/**路由跳转前 */
router.beforeEach((to,from,next) => {
  ViewUI.LoadingBar.config({
    color: "rgba(255,255,255,0.6)",
    height:5
  });
  next();
});

/**路由跳转后 */
router.afterEach(to => {
  if(to.meta) window.document.title = to.meta.name || "" ;
  ViewUI.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router;
