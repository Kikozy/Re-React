import React, { useState } from "react"

import http from "../../utils/http"

function handleLogin(user, pass) {
	http.post("/api/merchant.Login/getopenId", {
		username: user,
		password: pass,
	})
}

export default function ImgUpload() {
	const [user, setUser] = useState("")
	const [pass, setPass] = useState("")
	return (
		<>
			<input type="text" onChange={(e) => setUser(e.target.value)} placeholder="账号" value={user} />
			<input type="text" onChange={(e) => setPass(e.target.value)} placeholder="密码" value={pass} />
			<button onClick={() => handleLogin(user, pass)}>登录</button>
		</>
	)
}
