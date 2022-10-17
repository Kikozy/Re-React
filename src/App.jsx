
import React,{Component} from "react"
import Selector from "./views/selector/Selector"

//React.Component 是React中创建组件的类 需要继承他才能拥有
class App extends Component {
    render(){
        return(
            <Selector />
        )
    }
}

export default App