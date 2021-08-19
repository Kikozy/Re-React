import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
function Home(){
    const [user,changeUser] = useState('Null')
    const [money,changeMoney] = useState(0)
    let provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')
    let web3 = new Web3(provider)
    useEffect(()=>{
        if(!window.web3){
            alert('请先安装matmask！')
            return
        }
        console.log(web3.eth.getCoinbase().then(res=>console.log('>',res)))
        
    },[])

    function linkWb3(){
        web3.eth.isMining().then(res => console.log('在挖矿?',res));
        async function getInfo(accountNum){
            let users = await web3.eth.getAccounts()
            let user = users[accountNum]
            let userMoney =  await web3.eth.getBalance(user)
            return {user,userMoney}
        }
        async function printInfo(){
            let {user,userMoney} = await getInfo(1)
            changeUser(user)
            changeMoney(userMoney)
            console.log(user,userMoney)
        }
        printInfo()
    }

    return(
        <>
            <h1>Home页面</h1>
            <p>登录钱包: {user}</p>
            <p>钱包余额: {money}</p>
            <button onClick={()=>linkWb3()}>点击</button>
        </>
    )
}

export default Home