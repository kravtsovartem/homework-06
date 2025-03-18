import { createContext } from 'react'


const authUser = localStorage.getItem('user')

const defaultAuthData: IAuthContextData = {
	user: authUser,
	signIn: authUser != null,
	login(user, callback) {

		this.signIn = true
		this.user = user

		localStorage.setItem('user', user)

		if (callback) callback()
	},
	logout(callback) {

		this.signIn = false
		this.user = ''

		localStorage.removeItem('user')

		if (callback) callback()
	}
}

const AuthContext = createContext(defaultAuthData)

export default AuthContext