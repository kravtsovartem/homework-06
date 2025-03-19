import { Suspense, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, Group, Space, TextInput } from '@mantine/core'
import useNotes from '@/hooks/useNotes'
import MarkdownEditor from '@/components/MarkdownEditor'
import { modals } from '@mantine/modals'
import { notifications } from '@mantine/notifications'

function NotePage() {
  const [isEdit, setEdit] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  const id = Number(params?.id)

  const { note, updateTextNote, updateNameNote, removeNote } = useNotes(id)

  const openModal = () =>
    modals.openConfirmModal({
      title: 'Удалить заметку?',
      labels: { confirm: 'Удалить', cancel: 'Отменить' },
      confirmProps: { color: 'red' },
      onCancel: () => {},
      onConfirm: () => {
        notifications.show({
          message: 'Заметка удалена',
          position: 'top-right',
        })
        navigate('/')
        removeNote(id)
      },
    })

  const handleChangeEditMode = () => {
    setEdit((prevState) => !prevState)
  }

  const handleRemoveNote = () => {
    openModal()
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
            <Button onClick={handleRemoveNote}>Удалить</Button>
          </Group>
          <Space h="xl" />
          <TextInput
            value={note?.name}
            placeholder="Введите название"
            onChange={(e) => handleUpdateNameNote(e.target.value)}
          />
          <Space h="xl" />
          <MarkdownEditor text={note?.text} isEdit={isEdit} onChange={handleUpdateTextNote} />
        </Suspense>
      )}
    </>
  )
}

export default NotePage
