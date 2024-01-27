import { createRouter, createWebHistory } from 'vue-router'
import accueilVue from '../views/accueil.vue'
import ListeVue from '../views/Liste.vue'
import FavorisVue from '../views/Favoris.vue'
import erreur from '../views/erreur.vue'
import DetailComponent from '../components/DetailComponent.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'accueil',
    component: accueilVue
  },

  {
    path: '/Liste',
    name: 'Liste',
    component: ListeVue
  },
  {
    path: '/Favoris',
    name: 'Favoris',
    component: FavorisVue

  },

  {
    path: '/liste/:id',
    name: 'ListeDetails',
    component: DetailComponent,
    props: true
  },
  {
    path: '/:pathMatch(.*)',
    name: 'erreur',
    component: erreur
  }


]
})



export default router
