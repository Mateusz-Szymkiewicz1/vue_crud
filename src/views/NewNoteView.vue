<template>
  <h1 class="h1_title">New note</h1>
  <form class="note_form">
    <label>Title</label><br/>
    <input v-model="title" type="text" placeholder="..." max="100"><br/>
    <label>Text</label><br/>
    <textarea v-model="text" cols="45" rows="13" max="10000"></textarea><br/>
    <button class="btn_primary" @click.prevent="addNote">Add</button>
    <router-link to="/">
      <button class="btn_secondary">Cancel</button>
    </router-link>
  </form>
</template>
<script>
import { ref } from 'vue'
import { getTheme } from '@/composables/getTheme'
import { useNotesStore } from '@/stores/NotesStore'
import { useRouter } from 'vue-router'
export default {
  name: 'NewNote',
  setup () {
    const router = useRouter()
    const notesStore = useNotesStore()
    const title = ref('')
    const text = ref('')
    getTheme()
    const addNote = () => {
      notesStore.addNote(title, text)
      router.push('/')
    }
    return { title, text, addNote }
  }
}
</script>
