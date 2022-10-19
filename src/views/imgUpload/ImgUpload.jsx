import React, { useState } from 'react'
import { sendImgBedLogin, getImgList } from '../../api/imgBed'

function handleLogin(email, pass) {
  sendImgBedLogin({
    email: email,
    password: pass,
  })
}

//获取图片列表
function handleGetImgList() {
  getImgList()
}

export default function ImgUpload() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  return (
    <>
      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="邮箱" value={email} />
      <input type="text" onChange={(e) => setPass(e.target.value)} placeholder="密码" value={pass} />
      <button onClick={() => handleLogin(email, pass)}>登录</button>
      <button onClick={handleGetImgList}>获取图片</button>
    </>
  )
}
