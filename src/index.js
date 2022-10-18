//用于替代ReactDOM.render，没有它React18的新特性将不能工作
import { createRoot } from "react-dom/client"
import App from "./App"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App myData="测试数据" />)