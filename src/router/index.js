import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeAlt from '../views/HomeAlt.vue'
import Contact from '../views/Contact.vue'
import Project from '../views/Project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home-alt',
    name: 'HomeAlt',
    component: HomeAlt
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/project',
    name: 'Project',
    component: Project 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
