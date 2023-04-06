import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/main.css'

createApp(App).use(router).use(createPinia()).mount('#app')

if (!localStorage.getItem('notepad_settings')) {
  localStorage.setItem('notepad_settings', JSON.stringify({
    theme: 'light'
  }))
}
