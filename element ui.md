```
<el-upload
    class='upload-demo'
    action='https://jsonplaceholder.typicode.com/posts/'
    :http-request='getFile'
    :file-list='fileList'
    :on-change='handleChange'
>
    <el-button size='small' style='color:#1F2329;'>点击上传</el-button>
</el-upload>
                
   getFile(file) {
            console.log(file)
            var formData = new FormData()
            formData.append('file', file.file)
            let postParams = formData
            uploadImg({ postParams }).then(res => {
                if (res.Result == 'success') {
                    this.imgSrc = res.EntityList[0]

                    this.$message.success('图标上传成功！')
                }
            })
        },





<el-table-column prop="EquipLocalName" label="设备本地名称" show-overflow-tooltip>
             <template slot-scope="scope">
              <div>
                {{scope.row.EquipLocalName}}
                <el-badge v-if="scope.row.Component&&scope.row.Component.length?true:false"
                  :value="scope.row.Component&&scope.row.Component.length?scope.row.Component.length:0" class="item" type="warning">
                </el-badge>
              </div>
            </template>
          </el-table-column>

```


