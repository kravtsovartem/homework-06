interface IMenu {
	name: string
	link: string
}

interface IAuthContextData {
	user: string | null
	signIn: boolean
	login: (user: string, callback?: () => void) => void
	logout: (callback?: () => void) => void
}


interface ILoginFormData {
	[key: string]: string
	login: string
	password: string
}


interface IInputValues {
	label: string
	value: string
}

interface IFormInputs {
	name: string
	type: string
	label: string
	description?: string
	placeholder?: string
	icon?: React.ReactNode
	errorRule?(value: string): boolean
	errorText?: string
	required?: boolean
	values?: IInputValues[]
}

interface INote {
	id: number
	name: string
	text: string
}

interface IStore {
	notes: INote[]
	setNoteText(id: number, text: string): void
}