import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/main.css'
import '@/multiselect.css'

createApp(App).use(router).use(createPinia()).mount('#app')

if (!localStorage.getItem('notepad_settings')) {
  localStorage.setItem('notepad_settings', JSON.stringify({
    theme: 'light'
  }))
}

setTimeout(() => {
  document.body.style = 'transition: .4s'
}, 400)
