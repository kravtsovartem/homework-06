import { createContext } from 'react'

const StoreContext = createContext<IStore>({
  notes: [
    {
      id: 1,
      name: 'Тестовая заметка',
      text: '# Hi, *Pluto*!',
    },
  ],
	setNoteText(id, text) {
		this.notes = this.notes.map((note) => note.id === id ? {...note, text} : note)
	},
})

export default StoreContext
