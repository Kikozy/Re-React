import { render } from "@testing-library/react"
import React, { useState } from "react"
import { sendImgBedLogin, getImgList, sendImgToCloud } from "../../api/imgBed"
import "./ImgUpload.css"

function handleLogin(email, pass) {
	sendImgBedLogin({
		email: email,
		password: pass,
	})
}

function toBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = function (res) {
			return resolve(res.target.result)
		}
		reader.readAsDataURL(file)
	})
}

async function handleOnUploadChange(event, imgList, setImgList) {
	console.log("获取到的文件", event.target.files)
	for (const fileItem of event.target.files) {
		if (Math.ceil(fileItem.size / 1024) < 15 * 1024) {
			setImgList([...imgList, { file: fileItem, base64: await toBase64(fileItem) }])
		}
	}
}

// 上传图片
async function handleUploadImg(imgList){
  for (const imgItem of imgList) {
    // console.log(imgItem)
    await sendImgToCloud(imgItem.file)
  }
}

export default function ImgUpload() {
	const [email, setEmail] = useState("")
	const [pass, setPass] = useState("")
	const [imgList, setImgList] = useState([])
	return (
		<>
			<input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="邮箱" value={email} />
			<input type="text" onChange={(e) => setPass(e.target.value)} placeholder="密码" value={pass} />
			<button onClick={() => handleLogin(email, pass)}>登录</button>

			<div className="upload-box">
				<input type="file" onChange={(event) => handleOnUploadChange(event, imgList, setImgList)} multiple />

				{imgList.map((item,index) => (
					<img className="upload-view" src={item.base64} key={index}/>
				))}

				<button className="btn-upload" onClick={() => handleUploadImg(imgList)}>上传按钮</button>
			</div>
		</>
	)
}
