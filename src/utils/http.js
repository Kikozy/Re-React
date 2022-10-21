import axios from "axios"

const baseURL = "http://localhost:3000"

const http = axios.create({
	baseURL: baseURL,
	timeout: 640000,
	headers: {
		Accept: "application/json",
	},
})

http.interceptors.response.use((response) => {
	if (response.status === 200) return Promise.resolve(response.data)
	else return Promise.reject(response)
})

http.interceptors.request.use(
	(config) => {
		if (window.localStorage.getItem("token")){
      config.headers.token = window.localStorage.getItem("token")
    }
		else alert("未登录！")
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default http
