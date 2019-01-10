import React from 'react'

class NewRef extends React.Component {
	constructor(props) {
		super(props)
		this.ElementInput = React.createRef()
	}

	componentDidMount() {
		this.ElementInput.current.focus()
	}

	render() {
		return (
			<div className="App">
				<input
					ref={this.ElementInput}
					type="text"
					onChange={this.props.onChange}
					value={this.props.name}
				/>
				<br />
				{this.props.name}
			</div>
		)
	}
}

export default NewRef
