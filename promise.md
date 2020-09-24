```javascript
let checkLogin  = ()=> {
    return new Promise((resolve,reject)=> {
        let flag = document.cookie.includes('userId')
        if(flag) {
            resolve({
                status:0,
                result:true
            })
        } else {
            reject('error')
        }
    })
}

let getUserInfo = ()=> {
    return new Promise((resolve,reject)=> {
        let userInfo = {
            userId:'101'
        }
        resolve(userInfo)
    })
}
checkLogin().then(res=> {
    if(res.status === 0) {
        return getUserInfo()
    }
}).catch(e=> {
    console.log(e);
}).then(res=> { //userInfo
    console.log(res,'userInfo')
})
```
