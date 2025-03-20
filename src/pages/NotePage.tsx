import { Suspense, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button, Group, Space, TextInput } from '@mantine/core'
import useNotes from '@/hooks/useNotes'
import MarkdownEditor from '@/components/MarkdownEditor'

function NotePage() {
  const [isEdit, setEdit] = useState(true)

  const params = useParams()

  const id = Number(params?.id)

  const { note, updateTextNote, updateNameNote } = useNotes(id)

  const handleChangeEditMode = () => {
    setEdit((prevState) => !prevState)
  }

  const handleUpdateTextNote = (text: string) => {
    updateTextNote(id, text)
  }

  const handleUpdateNameNote = (name: string) => {
    updateNameNote(id, name)
  }

  return (
    <>
      {note && (
        <Suspense>
          <Group>
            <Button onClick={handleChangeEditMode}>Редактировать</Button>
          </Group>
          <Space h="xl" />
          <TextInput
            value={note?.name}
            placeholder="Название заметки"
            onChange={(e) => handleUpdateNameNote(e.target.value)}
            variant="unstyled"
						
						style={{
							borderBottom: '1px solid var(--app-shell-border-color)',
						}}
						disabled={!isEdit}
          />
          <Space h="xl" />
          <MarkdownEditor
            id={id}
            text={note?.text}
            isEdit={isEdit}
            onChange={handleUpdateTextNote}
          />
        </Suspense>
      )}
    </>
  )
}

export default NotePage
