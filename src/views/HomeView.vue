<template>
  <div class="home">
    <div class="buttons_wrapper">
      <button class="toggle_theme" @click="theme === 'light' ? theme = 'dark' : theme = 'light'"><i :class="theme === 'light' ? 'fa fa-sun' : 'fa fa-moon'"></i></button>
      <router-link to="/register" v-if="!logged">
        <button class="btn_sign_up btn_secondary">Sign Up</button>
      </router-link>
      <router-link to="/login" v-if="!logged">
        <button class="btn_sign_in btn_primary">Sign In</button>
      </router-link>
    </div>
    <img src="@/assets/logo.png" alt="Logo" class="logo">
    <h1>Notepad--</h1>
    <router-link to="/note/new">
      <button class="btn_new">New</button>
    </router-link>
    <input type="text" v-model="searched" class="search" placeholder="&#xF002;">
    <button :class="showFav ? 'btn_fav fav_active' : 'btn_fav'" @click="showFav = !showFav">Favourite</button>
    <Multiselect :max="5" :limit="10" mode="tags" :searchable="true" placeholder="Tags" v-model="tags" :options="options" @select="addTags" />
    <div class="notes">
      <router-link v-for="(note,i) in filteredNotes" :key="i" :to="'/note/'+note.id">
        <div class="note">
          <div class="icons">
            <i class="fa fa-trash" @click.prevent="deleteNote(note.id)"></i>
            <i :class="note.isFav ? 'fa fa-heart fav' : 'fa fa-heart'" @click.prevent="toggleFav(note.id)"></i>
          </div>
          <span class="title" v-if="note.title">{{note.title.length > 30 ? note.title.slice(0,30)+'...' : note.title}}</span>
          <span class="title" v-else>No title</span>
          <span class="preview">{{note.text.slice(0,100)+'...'}}</span>
          <div class="tags">
            <div class="tag" v-for="(tag, i ) in note.tags" :key="i">{{tag}}</div>
          </div>
        </div>
      </router-link>
    </div>
    <span class="no_notes" v-if="!filteredNotes.length">There's nothing here...</span>
  </div>
</template>

<script>
import Multiselect from '@vueform/multiselect'
import { useNotesStore } from '@/stores/NotesStore'
import { ref, watchEffect, watch } from 'vue'
export default {
  name: 'HomeView',
  components: { Multiselect },
  setup () {
    const theme = ref('light')
    if (localStorage.getItem('notepad_settings')) {
      const settings = JSON.parse(localStorage.getItem('notepad_settings'))
      theme.value = settings.theme
    }
    const logged = ref(false)
    const showFav = ref(false)
    const searched = ref('')
    const notesStore = ref(useNotesStore())
    notesStore.value.getNotes()
    const toggleFav = (id) => {
      notesStore.value.toggleFav(id)
    }
    const deleteNote = (id) => {
      notesStore.value.deleteNote(id)
    }
    const options = ref(notesStore.value.tags)
    const tags = ref(null)
    const addTags = (option) => {
      if (!options.value.includes(option)) {
        notesStore.value.tags.push(option)
        notesStore.value.save()
      }
    }
    const filteredNotes = ref(notesStore.value.notes)
    const filterNotes = () => {
      let notes = notesStore.value.notes
      if (searched.value) {
        notes = notes.filter(n => {
          if (n.text.toLowerCase().includes(searched.value) || n.title.toLowerCase().includes(searched.value)) {
            return true
          }
          return false
        })
      }
      if (tags.value) {
        tags.value.forEach(tag => {
          notes = notes.filter(n => n.tags.includes(tag))
        })
      }
      if (showFav.value) {
        notes = notes.filter(n => n.isFav === true)
      }
      return notes
    }
    watch(notesStore.value, () => {
      filteredNotes.value = notesStore.value.notes
      filteredNotes.value = filterNotes()
    })
    watch(searched, () => {
      filteredNotes.value = filterNotes()
    })
    watch(showFav, () => {
      filteredNotes.value = filterNotes()
    })
    watch(tags, () => {
      filteredNotes.value = filterNotes()
    })
    watchEffect(() => {
      if (theme.value === 'dark') {
        document.documentElement.style.setProperty('--background', '#202020')
        document.documentElement.style.setProperty('--foreground', '#fff')
        document.documentElement.style.setProperty('--primary', '#a7d883')
        document.documentElement.style.setProperty('--primary-hover', '#96c772')
        document.documentElement.style.setProperty('--form', '#303030')
        document.documentElement.style.setProperty('--input', '#404040')
        localStorage.setItem('notepad_settings', JSON.stringify({
          theme: 'dark'
        }))
      } else {
        document.documentElement.style.setProperty('--background', '#fff')
        document.documentElement.style.setProperty('--foreground', '#000')
        document.documentElement.style.setProperty('--primary', '#c9faa5')
        document.documentElement.style.setProperty('--primary-hover', '#b8e994')
        document.documentElement.style.setProperty('--form', '#eee')
        document.documentElement.style.setProperty('--input', '#fff')
        localStorage.setItem('notepad_settings', JSON.stringify({
          theme: 'light'
        }))
      }
    })
    return { notesStore, toggleFav, deleteNote, searched, filteredNotes, showFav, logged, theme, tags, options, addTags }
  }
}
</script>
<style>
  .note{
    background: var(--primary);
    color: #005000;
    padding: 25px;
    padding-bottom: 55px;
    margin: 10px;
    margin-left: 0;
    float: left;
    transition: .4s;
    position: relative;
    min-width: 300px;
  }
  .note *::selection{
    background: #fff;
    color: #005000;
  }
  .note:hover{
    background: var(--primary-hover);
    transform: translateY(-3px);
  }
  .title{
    font-weight: 600;
    font-size: 26px;
    display: block;
    padding-right: 85px;
  }
  .preview{
    display: block;
    font-size: 18px;
    margin-top: 20px;
  }
  h1{
    margin-bottom: 60px !important;
    color: var(--foreground);
  }
  .icons{
    font-size: 22px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .icons i {
    margin-left: 20px;
  }
  .fav{
    color: #e74c3c;
  }
  .btn_new, .btn_fav, .toggle_theme{
    height: 45px;
    width: 90px;
    float: left;
    background: transparent;
    border: 1px solid var(--foreground);
    font-size: 16px;
    margin-bottom: 5px;
    transition: .4s;
    color: var(--foreground);
    outline: none;
  }
  .btn_new:hover, .fav_active{
    background: var(--primary);
    border: 1px solid var(--primary);
  }
  .no_notes{
    display: block;
    padding-top: 20px;
  }
  .btn_fav{
    margin-right: 15px;
  }
  .notes{
    clear: both;
  }
  .search{
    font-size: 18px;
    padding: 7px;
    outline: none;
    height: 29px;
    margin-left: 15px;
    margin-right: 15px;
    padding-left: 10px;
    border: 1px solid var(--foreground);
    color: var(--foreground);
    float: left;
    background: transparent;
  }
  .logo{
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .toggle_theme{
    font-size: 26px;
    width: 40px;
    border:0;
  }
  .fa-sun{
    color:#f1c40f;
  }
  .fa-moon{
    color: #ffeaa7;
  }
  .buttons_wrapper{
    float: right;
    margin-top: -15px;
    margin-right: -15px;
  }
  .buttons_wrapper > a {
    margin-left: 10px;
  }
  .tag{
    background: #005000;
    color: #fff;
    padding: 8px;
    font-size: 15px;
    float: left;
    margin-right: 10px;
  }
  .tags{
    position: absolute;
    bottom: 10px;
    left: 25px;
  }
</style>
