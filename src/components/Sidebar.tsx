import ListItem from '@/components/ListItem'
import useNotes from '@/hooks/useNotes'
import { useParams } from 'react-router-dom'

function Sidebar() {
  const { notes } = useNotes()
  const params = useParams()

  return (
    <div>
      <div
        style={{
          borderTop: '1px solid var(--app-shell-border-color)',
        }}
      >
        {notes?.map((note: INote) => (
          <ListItem
            active={note.id === Number(params?.id)}
            key={note.id}
            name={note.name.trim().length > 0 ? note.name : 'Без названия'}
            to={`/note/${note.id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
