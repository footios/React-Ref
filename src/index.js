import React from 'react'
import ReactDOM from 'react-dom'
import NewRef from './NewRef'

import './styles.css'

class App extends React.Component {
	state = {
		name: '',
		name2: ''
	}
	// ref takes a dynamic input wich is a function
	// In the func you set a reference to the element
	// in this case 'input'.
	// Then you can assign this reference in a property
	// of the class.
	// So then you can use this prop (inputElement)
	// to call functions on the element that has the reference.
	// And it's working so well, I have to comment out the function
	// in order to code. Otherwise the cursur snaps to the input element.
	// LOL

	// componentDidMount() {
	// 	this.inputElement.focus()
	// }

	handleChange = e => this.setState({ name: e.target.value })

	handleChange2 = e => this.setState({ name2: e.target.value })

	render() {
		return (
			<div className="App">
				<input
					ref={inp => (this.inputElement = inp)}
					type="text"
					onChange={this.handleChange}
					value={this.state.name}
				/>
				<br />
				{this.state.name}
				<br />
				<NewRef name={this.state.name2} onChange={this.handleChange2} />
			</div>
		)
	}
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
