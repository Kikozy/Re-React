import ReactDOM from "react-dom"
import App from "./App"

console.log(ReactDOM)
// reactDOM是用于渲染Dom元素的

/* render方法拥有两个参数
参数① 接收一个组件
参数② 要注入的标签
*/

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
