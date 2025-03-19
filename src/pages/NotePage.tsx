import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, Group, Space, TextInput } from '@mantine/core'
import useNotes from '@/hooks/useNotes'
import MarkdownEditor from '@/components/MarkdownEditor'

function NotePage() {
  const [isEdit, setEdit] = useState(true)

  const params = useParams()
	const navigate = useNavigate()

  const id = Number(params?.id)

  const { note, updateTextNote, updateNameNote, removeNote } = useNotes(id)

  const handleChangeEditMode = () => {
    setEdit((prevState) => !prevState)
  }

  const handleRemoveNote = () => {
		navigate('/')
    removeNote(id)
  }

	const handleUpdateTextNote = (text: string) => {
		updateTextNote(id, text)
	}

	const handleUpdateNameNote = (name: string) => {
		updateNameNote(id, name)
	}

  return (
    <>
      <Group>
        <Button onClick={handleChangeEditMode}>Редактировать</Button>
        <Button onClick={handleRemoveNote}>Удалить</Button>
      </Group>
      <Space h="xl" />
      <TextInput value={note?.name} placeholder="Введите название" onChange={(e) => handleUpdateNameNote(e.target.value)} />
      <Space h="xl" />
      {note && <MarkdownEditor text={note?.text} isEdit={isEdit} onChange={handleUpdateTextNote} />}
    </>
  )
}

export default NotePage
