import Dexie, { type EntityTable } from 'dexie';

const db = new Dexie('NotesDatabase') as Dexie & {
	notes: EntityTable<
		INote,
		'id'
	>;
};

// Schema declaration:
db.version(1).stores({
	notes: '++id, name, text' // primary key "id" (for the runtime!)
});

await db.transaction('rw', db.notes, async () => {
	await db.notes.put({
		id: 1,
		name: 'Headers',
		text: `# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------`
	})

	await db.notes.put({
		id: 2,
		name: 'Emphasis',
		text: `Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~`
	})

	await db.notes.put({
		id: 3,
		name: 'Task lists',
		text: `- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item`
	})
})



export { db };