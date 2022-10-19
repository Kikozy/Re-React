import React, { Component } from "react"
import List from "./views/selector/List"
import Selector from "./views/selector/Selector"

//React.Component 是React中创建组件的类 需要继承他才能拥有
class App extends Component {
	constructor(props) {
		console.log("[构造器]constructor")
		super(props)
		this.state = {
			arr: [],
		}
		this.handleAddStateData = this.handleAddStateData.bind(this)
	}

	handleAddStateData() {
		let tempArr = []
		let start = this.state.arr.length
		for (let i = 0; i < start + 50; i++) {
			tempArr.push(i)
		}
		console.log("这是啥呀", tempArr)
		this.setState({
			arr: tempArr,
		})
	}

	componentDidMount() {
		console.log("[挂载完成]componentDidMount")
	}

	//在创建时或更新时的render之前执行，让 props 能更新到组件内部 state中。
	static getDerivedStateFromProps() {
		console.log("[props更新]getDerivedStateFromProps")
		return true
	}
	shouldComponentUpdate() {
		console.log("[将要更新]shouldComponentUpdate")
	    return true
	}
	render() {
		console.log("[渲染]render")
		return (
			<>
				<List />
				<button onClick={this.handleAddStateData}>点我啊</button>
			</>
		)
	}
}

export default App
