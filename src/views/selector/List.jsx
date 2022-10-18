import React, { Component } from "react"

import './List.css'

export default class List extends Component {
	constructor(props) {
		console.log(props)
		super(props)
		this.state= {
			data: 'base'
		}
	}
	//从props中获取state
	static getDerivedStateFromProps(nextProps, prevState) {
		//nextProps新的值
		//之前的state
		console.log(nextProps, prevState)
		return true
	}
	render() {
		return (
			<div className="box">
				{this.props.arr.map((item) => (
					<p key={item}>{item}</p>
				))}
			</div>
		)
	}
}
