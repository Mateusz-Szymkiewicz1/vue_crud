<template>
  <h1 class="h1_title">New note</h1>
  <form class="note_form">
    <label>Title</label><br/>
    <input v-model="title" type="text" placeholder="..." max="100"><br/>
    <label>Text</label><br/>
    <textarea v-model="text" cols="45" rows="13" max="10000"></textarea><br/>
    <Multiselect :max="5" :createOption="true" :limit="10" mode="tags" :searchable="true" placeholder="Tags" v-model="tags" :options="options" /><br/><br/>
    <div class="buttons">
      <button class="btn_primary" @click.prevent="addNote">Add</button>
      <router-link to="/">
        <button class="btn_secondary">Cancel</button>
      </router-link>
    </div>
  </form>
</template>
<script>
import Multiselect from '@vueform/multiselect'
import { ref } from 'vue'
import { getTheme } from '@/composables/getTheme'
import { useNotesStore } from '@/stores/NotesStore'
import { useRouter } from 'vue-router'
export default {
  name: 'NewNote',
  components: { Multiselect },
  setup () {
    const router = useRouter()
    const notesStore = useNotesStore()
    const title = ref('')
    const text = ref('')
    const tags = ref([])
    const options = ref(notesStore.tags)
    getTheme()
    const addNote = () => {
      notesStore.addNote(title, text, tags)
      router.push('/')
    }
    return { title, text, tags, options, addNote }
  }
}
</script>
