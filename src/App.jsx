import React, { useState } from "react"
import Doushi from "./views/doushi/Doushi"
import ImgList from "./views/imgUpload/ImgList"
import ImgUpload from "./views/imgUpload/ImgUpload"
import List from "./views/selector/List"

export default function App() {
	const [nowSelect, setNowSelect] = useState("")
	const [componentsList, setComponentsList] = useState(["列表", "测试", "图片上传","图片列表"])
	return (
		<>
			<select onChange={(value) => setNowSelect(value.target.value)} value={nowSelect}>
				<option value="">请选择</option>
				{componentsList.map((item, index) => (
					<option value={item} key={index}>
						{item}
					</option>
				))}
			</select>
			{nowSelect === "列表" ? <List /> : ""}
			{nowSelect === "测试" ? <Doushi /> : ""}
			{nowSelect === "图片上传" ? <ImgUpload /> : ""}
			{nowSelect === "图片列表" ? <ImgList /> : ""}
		</>
	)
}
