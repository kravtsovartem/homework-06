import ListItem from '@/components/ListItem'
import useNotes from '@/hooks/useNotes'

function Sidebar() {
  const { notes } = useNotes()

  return (
    <div>
      {notes?.map((note: INote) => (
        <ListItem key={note.id} id={note.id} name={note.name.trim().length > 0 ? note.name : "Без названия"} />
      ))}
    </div>
  )
}

export default Sidebar
