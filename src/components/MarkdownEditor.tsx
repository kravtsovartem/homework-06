import {
  MDXEditor,
  toolbarPlugin,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
  MDXEditorMethods,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CodeToggle,
  InsertImage,
  imagePlugin,
  InsertTable,
  Separator,
  tablePlugin,
  markdownShortcutPlugin
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { useEffect, useRef, useState } from 'react'

interface IMarkdownEditorProps {
	id: number
  text: string | undefined
  isEdit?: boolean
  onChange?: (text: string) => void
}

export default function MarkdownEditor({ id, text, isEdit = false, onChange }: IMarkdownEditorProps) {
  const editor = useRef<MDXEditorMethods>(null)

	const [currentEditorId, setEditorId] = useState(id)

  useEffect(() => {
    if (currentEditorId != id && editor.current) {
      editor.current.setMarkdown(text ?? '')
			editor.current.focus()
			setEditorId(id)
    }
  }, [currentEditorId, text])

  return (
    <div>
      <MDXEditor
        ref={editor}
        readOnly={!isEdit}
        markdown={text ?? ''}
        onChange={onChange}
				autoFocus
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          imagePlugin(),
          tablePlugin(),
          diffSourcePlugin({ viewMode: 'rich-text' }),
          markdownShortcutPlugin(),
          toolbarPlugin({
            toolbarClassName: 'my-classname',
            toolbarContents: () => (
              <>
                {isEdit && (
                  <DiffSourceToggleWrapper options={['source']}>
                    <BlockTypeSelect />
                    <BoldItalicUnderlineToggles />
                    <InsertImage />
                    <CodeToggle />
                    <Separator />
                    <InsertTable />
                  </DiffSourceToggleWrapper>
                )}
              </>
            ),
          }),
        ]}
      />
    </div>
  )
}