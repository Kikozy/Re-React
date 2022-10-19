import axios from "axios"

const baseURL = "http://localhost:3000"

const http = axios.create({
	baseURL: baseURL,
	timeout: 640000,
})
// http.defaults.headers.Authorization = "3nOYvJaPUheiT2D73xnpZ4uOhkZQNFYy"
http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"

http.interceptors.response.use((response) => {
	if (response.status === 200) return Promise.resolve(response)
	else return Promise.reject(response)
})

export default http
