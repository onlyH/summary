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


```
  //获取表格数据
    getTableData(pageNum) {
      this.loading = true
      let fl = this.formatFilter(pageNum)
      let param = {
        category: fl.category || undefined,
        spaceIdList: fl.spaceIdList || undefined,
        orders: "createTime desc",
        pageNumber: 1,
        pageSize: 1000
      }
      equipCategoryProperty(param, res => {
        this.unlinkNumber = res.total
        this.linkNumber += res.content.length
        // this.page.total = res.Total
        this.contentData = this.contentData.concat(res.content)
        if (res.total / (res.pageSize * res.pageNumber) > 1) {
          this.getTableData(res.pageNumber + 1)
        } else {
          this.contentData.forEach(item => {
            if (item.propertyList && item.propertyList.length) {
              item.propertyList.forEach((Assets, index) => {
                let obj = JSON.parse(JSON.stringify(Object.assign(item, { PropertyItem: Assets, disabled: false })))
                delete obj.propertyList
                this.tableData.push(obj)
                if (index == 0) {
                  this.mergeCol.push(item.propertyList.length)
                } else {
                  this.mergeCol.push(false)
                }
              })
            }
          })
          this.loading = false
        }
      })
    },
```


```

str.substr(0, 4) + "-" + str.substr(4, 2) + "-" + str.substr(6, 2) + " " + str.substr(8, 2) + ":" + str.substr(10, 2) + ":" + str.substr(12, 2)

i.value = source.filter(item => transArray.includes(item.code)).map(item => item.name).join(',')

```

```
    if (this.instance.hasOwnProperty(i.path)) {
              if (!Array.isArray(this.instance[i.path])) {
                let transArray = this.instance[i.path].split(',')
                i.value = source.filter(item => transArray.includes(item.code)).map(item => item.name).join(',')
              }
            }
```
