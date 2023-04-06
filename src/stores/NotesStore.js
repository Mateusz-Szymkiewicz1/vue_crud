import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    notes: [],
    isLoading: false
  }),
  getters: {
    getFav () {
      return this.notes.filter(n => n.isFav === true)
    }
  },
  actions: {
    async getNotes () {
      this.isLoading = true
      if (!localStorage.getItem('notes')) {
        localStorage.setItem('notes', JSON.stringify({
          notes: [{ id: 1, title: 'querty', text: 'Lorem msadfiusadusahd ashdgyusadb uhsaiudb', isFav: false }]
        }))
      }
      this.notes = JSON.parse(localStorage.getItem('notes')).notes
      this.isLoading = false
    },
    save () {
      localStorage.setItem('notes', JSON.stringify({
        notes: this.notes
      }))
    },
    toggleFav (id) {
      const note = this.notes.find(n => n.id === id)
      note.isFav = !note.isFav
      this.save()
    },
    deleteNote (id) {
      this.notes = this.notes.filter(n => {
        return n.id !== id
      })
      this.save()
    },
    addNote (title, text) {
      const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(23).substring(2, 5)
      this.notes.unshift({ id: id, title: title, text: text, isFav: false })
      this.save()
    },
    editNote (note, newTitle, newText) {
      this.notes = this.notes.filter(n => n.id !== note.id)
      this.notes.unshift({ id: note.id, title: newTitle, text: newText, isFav: note.isFav })
      this.save()
    }
  }
})
