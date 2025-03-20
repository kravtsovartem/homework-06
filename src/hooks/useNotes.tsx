import { db } from '@/untils/db'
import { useLiveQuery } from 'dexie-react-hooks'

export default function useNotes(id?: number) {
  const note = useLiveQuery(async () => {
    if (!id) return

    const note = await db.notes.where('id').equals(id).first()

    return { ...note }
  }, [id])

  const notes = useLiveQuery(() => db.notes.reverse().toArray())

  const updateTextNote = async (id: number, text: string) => {
    await db.notes.where('id').equals(id).modify({ text })
  }

  const updateNameNote = async (id: number, name: string) => {
    await db.notes.where('id').equals(id).modify({ name })
  }

  const removeNote = async (id: number) => {
    await db.notes.where('id').equals(id).delete()
  }

  const createNote = async () => {
    const nodeId = await db.notes.add({
      name: '',
      text: '',
    })

		return await db.notes.where('id').equals(nodeId).first()
  }

  return {
    note,
    notes,
    updateNameNote,
    updateTextNote,
    removeNote,
		createNote
  }
}
