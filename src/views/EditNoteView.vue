<template>
  <h1 class="h1_404" v-if="!note">Nie znaleziono notki o podanym id ;/<p>404</p></h1>
  <router-link v-if="!note" to="/"><i class="fa fa-arrow-left"></i></router-link>
  <div class="wrapper" v-if="note">
    <h1 class="h1_title">Edit note - {{note.title}}</h1>
    <form class="note_form">
      <label>Title</label><br/>
      <input v-model="newTitle" type="text" placeholder="..." max="100"><br/>
      <label>Text</label><br/>
      <textarea v-model="newText" cols="45" rows="13" max="10000"></textarea><br/>
      <Multiselect :max="5" :createOption="true" :limit="10" mode="tags" :searchable="true" placeholder="Tags" v-model="newTags" :options="options" /><br/><br/>
      <div class="buttons">
        <button class="btn_primary" @click.prevent="editNote">Edit</button>
        <router-link :to="'/note/'+note.id">
          <button class="btn_secondary">Cancel</button>
        </router-link>
      </div>
    </form>
  </div>
</template>
<script>
import Multiselect from '@vueform/multiselect'
import { ref } from 'vue'
import { useNotesStore } from '@/stores/NotesStore'
import { useRouter } from 'vue-router'
import { getTheme } from '@/composables/getTheme'
export default {
  name: 'EditNote',
  components: { Multiselect },
  props: ['id'],
  setup (props) {
    getTheme()
    const router = useRouter()
    const notesStore = ref(useNotesStore())
    notesStore.value.getNotes()
    const note = notesStore.value.notes.find(n => n.id === props.id)
    const newTitle = ref('')
    const newText = ref('')
    const newTags = ref([])
    if (note) {
      newTitle.value = note.title
      newText.value = note.text
      newTags.value = note.tags
    }
    const options = ref(notesStore.value.tags)
    const editNote = () => {
      notesStore.value.editNote(note, newTitle, newText, newTags)
      router.push('/note/' + note.id)
    }
    return { note, newTitle, newText, newTags, options, editNote }
  }
}
</script>
<style>
  .h1_404{
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .fa-arrow-left{
    font-size: 32px;
    position: absolute;
    top: 25px;
    right: 30px;
    color: var(--primary-hover);
  }
  p{
    font-size: 100px;
    margin: 10px;
    color: var(--primary-hover);
  }
  .note_form{
    background: var(--form);
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    padding: 30px;
    padding-top: 40px;
    margin-bottom: 40px;
  }
  .h1_title{
    text-align: center;
    margin-top: 50px;
    color: var(--foreground);
  }
  .note_form textarea{
    resize: none;
    margin-bottom: 20px;
    outline: none;
    padding: 10px;
    font-size: 20px;
    background: var(--input);
    color: var(--foreground);
  }
  .note_form input:not(.multiselect *){
    outline: none;
    height: 30px;
    padding-left: 5px;
    font-size: 18px;
    margin-bottom: 20px;
    background: var(--input);
    color: var(--foreground);
  }
  .note_form .multiselect{
    background: var(--input) !important;
  }
</style>
