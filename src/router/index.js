import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomsView from '../views/RoomsView.vue'
import ChiaraRoomView from '../views/ChiaraRoomView.vue'
import ElenaRoomView from '../views/ElenaRoomView.vue'
import GiovannaRoomView from '../views/GiovannaRoomView.vue'
import FrancescoRoomView from '../views/FrancescoRoomView.vue'
import AliceRoomView from '../views/AliceRoomView.vue'
import ServicesView from '../views/ServicesView.vue'
import LocationView from '../views/LocationView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactsView from '../views/ContactsView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home - Cascina della Vachina' }
  },
  {
    path: '/camere',
    name: 'rooms',
    component: RoomsView,
    meta: { title: 'Le Camere - Cascina della Vachina' }
  },
  {
    path: '/camere/chiara',
    name: 'room-chiara',
    component: ChiaraRoomView,
    meta: { title: 'Camera Chiara - Cascina della Vachina' }
  },
  {
    path: '/camere/elena',
    name: 'room-elena',
    component: ElenaRoomView,
    meta: { title: 'Camera Elena - Cascina della Vachina' }
  },
  {
    path: '/camere/giovanna',
    name: 'room-giovanna',
    component: GiovannaRoomView,
    meta: { title: 'Camera Giovanna - Cascina della Vachina' }
  },
  {
    path: '/camere/francesco',
    name: 'room-francesco',
    component: FrancescoRoomView,
    meta: { title: 'Camera Francesco - Cascina della Vachina' }
  },
  {
    path: '/camere/alice',
    name: 'room-alice',
    component: AliceRoomView,
    meta: { title: 'Camera Alice - Cascina della Vachina' }
  },
  {
    path: '/servizi',
    name: 'services',
    component: ServicesView,
    meta: { title: 'Servizi - Cascina della Vachina' }
  },
  {
    path: '/dove-siamo',
    name: 'location',
    component: LocationView,
    meta: { title: 'Dove Siamo - Cascina della Vachina' }
  },
  {
    path: '/galleria',
    name: 'gallery',
    component: GalleryView,
    meta: { title: 'Galleria - Cascina della Vachina' }
  },
  {
    path: '/contatti',
    name: 'contacts',
    component: ContactsView,
    meta: { title: 'Contatti - Cascina della Vachina' }
  },
  {
    path: '/privacy-policy',
    name: 'privacy',
    component: PrivacyPolicyView,
    meta: { title: 'Privacy Policy - Cascina della Vachina' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Cascina della Vachina'
  next()
})

export default router
