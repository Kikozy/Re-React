import React, { useState } from "react"

function handleCheckAnswer(correctAnswer, nowAnswer) {
	console.log(correctAnswer, nowAnswer)
	if (correctAnswer === nowAnswer) {
		alert("正确")
	} else {
		alert("gg")
	}
}

export default function TesutoCard(props) {
	const [inputValue, setInputValue] = useState()
	return (
		<>
			<div>问题：{props.tesutoData.question}</div>
			<input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="这个地方输入" />
			<button
				onClick={() => {
					handleCheckAnswer(props.tesutoData.answer,inputValue)
				}}
			>
				提交
			</button>
		</>
	)
}
