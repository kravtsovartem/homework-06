import useStore from '@/hooks/useStore'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  MDXEditor,
  toolbarPlugin,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  UndoRedo,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { Button } from '@mantine/core'

function NotePage() {
  const [isEdit, setEdit] = useState(true)

  const store = useStore()
  const params = useParams()
  let note = store.notes.find((note) => note.id === Number(params.id))
	note = note ?? { id: 0, name: '', text: '' }

  const handleChangeEditMode = () => {
    setEdit((prevState) => !prevState)
  }

  const handleChangeNoteText = (text: string) => {
    store.setNoteText(note?.id, text)
  }

  return (
    <>
      <Button onClick={handleChangeEditMode}>Редактировать</Button>
      <p>{note?.text}</p>
      <MDXEditor
        onChange={handleChangeNoteText}
        readOnly={!isEdit}
        markdown={note?.text ?? '# error'}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          diffSourcePlugin(),
          toolbarPlugin({
            toolbarClassName: 'my-classname',
            toolbarContents: () => (
              <>
                {isEdit && (
                  <DiffSourceToggleWrapper options={['source']}>
                    <UndoRedo />
                  </DiffSourceToggleWrapper>
                )}
              </>
            ),
          }),
        ]}
      />
    </>
  )
}

export default NotePage
