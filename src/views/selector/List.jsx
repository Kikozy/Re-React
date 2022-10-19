import { useEffect, useState } from "react"

export default function List() {
	const [num, setNum] = useState(0)
	//挂载与销毁
	useEffect(() => {
		console.log("挂载完毕")
		return () => {
			console.log("销毁完毕")
		}
	}, [])
	//watch 监听
	useEffect(() => {
		console.log("[hook-watch]-> num:", num)
	}, [num])

	return (
		<>
			<div onClick={() => setNum(num + 1)}>
				<p>List组件</p>
				<div>数量：{num}</div>
			</div>
		</>
	)
}
