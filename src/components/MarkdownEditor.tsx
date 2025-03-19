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
  markdownShortcutPlugin,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { useEffect, useRef } from 'react'

interface IMarkdownEditorProps {
  text: string | undefined
  isEdit?: boolean
  onChange?: (text: string) => void
}

export default function MarkdownEditor({ text, isEdit = false, onChange }: IMarkdownEditorProps) {
  const editor = useRef<MDXEditorMethods>(null)

  useEffect(() => {
    if (editor.current) {
      editor.current.setMarkdown(text ?? '')
    }
  }, [text])

  return (
    <div style={{ zIndex: 102 }}>
      <MDXEditor
        ref={editor}
        readOnly={!isEdit}
        markdown={text ?? ''}
        onChange={onChange}
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
// import Markdown from 'marked-react'

// const style = {
// 	textArea: {
// 		minWidth: '100%',
// 		maxWidth: '100%',
// 	}
// }

// export default function MarkdownEditor({ text, isEdit = false }: IMarkdownEditorProps) {
//   if (isEdit) return <textarea style={style.textArea}>{text}</textarea>

//   return <Markdown>{text}</Markdown>
// }
