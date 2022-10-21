import React, { useEffect, useState } from "react"
import ImgFrame from "./ImgFrame"
import { getImgList } from "../../api/imgBed"

export default function ImgList() {
	const [imgList, setImgList] = useState([])

	useEffect(() => {
		;(async () => {
			setImgList([...imgList, ...(await handleGetImgList())])
		})()
	}, [])

	//获取图片列表
	async function handleGetImgList() {
		const imgListRes = await getImgList()
		return imgListRes.data
	}

	return (
		<>
			<button onClick={handleGetImgList}>获取图片</button>
			<div className="waterfall-box">
				{imgList.map((item, index) => (
					<ImgFrame imgUrl={item.url} key={index}></ImgFrame>
				))}
			</div>
		</>
	)
}
