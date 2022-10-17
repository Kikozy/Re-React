import React, { Component } from "react"

export default class selector extends Component {
	constructor(props) {
		super(props)
		this.state = {
			num: 0,
		}
		this.changeFun = this.changeFun.bind(this)
	}

	changeFun() {
		console.log(this)
		this.setState({
			num: "wdnmd",
		})
	}

	render() {
		return (
			<>
				<p onClick={this.changeFun}>什么呀</p>
				<div onClick={() => this.setState({ num: this.state.num + 1 })}>{this.state.num}</div>
			</>
		)
	}
}
