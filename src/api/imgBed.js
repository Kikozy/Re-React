import http from '../utils/http'

export async function sendImgBedLogin(loginData) {
  const loginState = await http.post('/api/v1/tokens', loginData)
  console.log('获取到了token', loginState.data.token)
  window.localStorage.setItem('token', loginState.data.token)
}

export async function getImgList() {
  const imgList = await http.get('/api/v1/images')
  console.log('获取到了图片列表', imgList)
}
