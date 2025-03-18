import React, { Component } from "react"

interface IErrorBoundaryState {
	hasError: boolean
}
interface IErrorBoundaryProps {
	children?: React.ReactNode
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {

	constructor(props: IErrorBoundaryProps) {
		super(props)

		this.state = {
			hasError: false
		}
	}
	
	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error(error, errorInfo)
	}

	static getDerivedStateFromError(error: Error): IErrorBoundaryState {
		console.info('getDerivedStateFromError', error)
		return {
			hasError: true
		}
	}

	render() {
		if(this.state.hasError) {
			return <h4>Ошибка...</h4>
		}

		return this.props.children
	}
}

export default ErrorBoundary