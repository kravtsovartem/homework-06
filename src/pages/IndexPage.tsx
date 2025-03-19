import useNotes from '@/hooks/useNotes'
import { Text } from '@mantine/core'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function IndexPage() {
  const { notes } = useNotes()
  const navigate = useNavigate()

  useEffect(() => {
    if (notes?.length && notes?.length != 0) {
      navigate(`/note/${notes[notes.length - 1].id}`)
    }
  }, [navigate, notes])

  return (
    <div>
      <Text size="xl" fw={700}>
        Создаёте новую заметку
      </Text>
    </div>
  )
}
