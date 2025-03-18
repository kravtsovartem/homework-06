interface ICharacter {
	id: number
	name: string
	status: string
	species: string
	type: string
	gender: string
	image: string
	created: string
}

interface IEpisode {
	id: number
	name: string
	air_date: string
	episode: string
	created: string
}

interface ILocation {
	id: number
	name: string
	type: string
	dimension: string
	created: string
}

interface ICategory extends ICharacter, IEpisode, ILocation {
}


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
