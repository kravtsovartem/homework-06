import ListItem from '@/components/ListItem'
import useStore from '@/hooks/useStore'

function Sidebar() {
  const store = useStore()

  return (
    <div>
      {store.notes.map((note: INote) => (
        <ListItem key={note.id} id={note.id} name={note.name} />
      ))}
    </div>
  )
}

export default Sidebar
