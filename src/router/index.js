import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewNoteView from '../views/NewNoteView.vue'
import NoteView from '../views/NoteView.vue'
import EditNoteView from '../views/EditNoteView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import TOSView from '../views/TOSView.vue'
import ErrorView from '../views/ErrorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/note/new',
    name: 'newNote',
    component: NewNoteView
  },
  {
    path: '/note/:id',
    name: 'Note',
    component: NoteView,
    props: true
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: EditNoteView,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/tos',
    name: 'TOS',
    component: TOSView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: ErrorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
