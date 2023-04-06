<template>
  <div class="wrapper">
    <h1 class="h1_title">Note - {{note.title ? note.title : 'No title'}}</h1>
    <div class="content">{{note.text}}
      <router-link to="/">
        <button class="back btn_secondary">Back</button>
      </router-link>
      <router-link :to="'/edit/'+note.id">
        <button class="edit btn_primary">Edit</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { useNotesStore } from '@/stores/NotesStore'
import { getTheme } from '@/composables/getTheme'
export default {
  name: 'NoteView',
  props: ['id'],
  setup (props) {
    const notesStore = useNotesStore()
    notesStore.getNotes()
    const note = notesStore.notes.find(n => n.id === props.id)
    getTheme()
    return { note }
  }
}
</script>
<style scoped>
  .content{
    background: var(--form);
    min-width: 600px;
    width: 60%;
    margin: auto;
    font-size: 24px;
    padding: 30px;
    padding-bottom: 70px;
    position: relative;
    color: var(--foreground);
  }
  .edit{
    position: absolute;
    bottom: -55px;
    right: 0;
  }
  .back{
    margin-left: 20px;
    position: absolute;
    bottom: -55px;
    right: 105px;
  }
</style>
