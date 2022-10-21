import http from "../utils/http"

export async function sendImgBedLogin(loginData) {
	const loginState = await http.post("/api/token", loginData)
	console.log("获取到了token", loginState.data.token)
	window.localStorage.setItem("token", loginState.data.token)
}

export async function getImgList() {
	const imgList = await http.get("/api/images", {
		page: 1,
	})
	return imgList.data
}

//上传图片
export async function sendImgToCloud(image) {
	let dataForm = new FormData()
	dataForm.append("image", image)
	const sendState = await http.post("/api/upload", dataForm)
}
