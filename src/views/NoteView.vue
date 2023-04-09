<template>
  <div class="wrapper">
    <h1 class="h1_title">Note - {{note.title ? note.title : 'No title'}}</h1>
    <div class="content">
      <div class="tags">
        <span>Tags:</span>
        <div class="tag" v-for="(tag,i) in note.tags" :key="i">{{tag}}</div>
        <div class="heart tag" v-if="note.isFav"><i class="fa fa-heart"></i></div>
      </div>
      <pre>{{note.text}}</pre>
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
    margin-bottom: 100px;
    margin-top: 110px;
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
  pre{
    margin-top: 0;
  }
  .tag{
    background: var(--primary);
    color: #fff;
    float: left;
    padding: 10px;
    margin-right: 10px;
    font-size: 18px;
  }
  .tags{
    position: absolute;
    left: 0;
    top: -50px;
  }
  .tags span{
    float: left;
    margin-right: 15px;
    margin-top: 5px;
  }
  .heart{
    background: #e74c3c;
    padding-right:12px;
  }
</style>
