import React, { useState } from "react"
import TesutoCard from "./TesutoCard"

export default function Doushi() {
	const [tesutoKey, setTesutoKey] = useState(0)
	const [list, setList] = useState([
		{ question: "ctrl", answer: "只因" },
		{ question: "美食家", answer: "嗨嗨嗨" },
		{ question: "遇到困难", answer: "打个脚线" },
	])
	return (
		<>
			<TesutoCard tesutoData={list[tesutoKey]}></TesutoCard>
			<button onClick={() => setTesutoKey(tesutoKey + 1)}>下</button>
		</>
	)
}
