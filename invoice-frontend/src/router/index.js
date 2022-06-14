import Vue from "vue"
import Router from "vue-router"
import RegisterCreate from "@/components/RegisterCreate"

Vue.use(Router)
export default new Router({
  routes: [
    
    {
      path: "/Register",
      name: "Register",
      component: RegisterCreate
    }
  ]
})