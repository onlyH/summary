```javascript
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

```vue
      <el-upload
        class="upload-demo"
        :drag="true"
        action="/api/datacenter/graphic/import"
        multiple
        :show-file-list='false'
        name="file"
        :headers="headers"
        :data="dataId"
        :on-progress="progress"
        :on-success="success"
        :on-error="error"
      >
        <i class="el-icon-upload"/>
        <div
          class="el-upload__text"
          v-html="values.uploadTxt"
        />
        <div class="upload__tip danger" slot="tip">{{ values.uploadTips}}</div>
      </el-upload>
      
   headers() {
        return {
          'ProjectId': this.projectId,
          'Comming': 'adm',
          'Account': storage.get("user_name")
        }
      },
      dataId() {
        return {
          relType: localStorage.getItem('RelationType') || '',
          zoneType: localStorage.getItem('ZoneType') || '',
          projectId: this.projectId
        }
      },
```
```javascript
  <el-select
    v-model='ruleForm.LineDash'
    placeholder='请选择'
    size='small'
    style='width:160px;margin-right:24px'
    ref='select1'
    @change='changeLineType'
>
    <el-option v-for='item in borderLineOption' :key='item.id' :label='item.src' :value='item.id'>
        <img :src='item.src' alt />
    </el-option>
</el-select>

         borderLineOption: [
                {
                    id: 'solid',
                    src: require('@/assets/imgs/1pxline.jpg')
                },
                {
                    id: 'dashed',
                    src: require('@/assets/imgs/dashedLine.jpg')
                },
                {
                    id: 'dotted',
                    src: require('@/assets/imgs/dotLine.jpg')
                }
            ],
       changeLineType(val) {
            this.$set(this.ruleForm, 'LineDash', val)
            this.borderLineOptionObject = val && this.borderLineOption.find(item => item.id == val)
            if (this.$refs.select1 && this.$refs.select1.$el) {
                this.$refs.select1.$el.children[0].children[0].setAttribute(
                    'style',
                    'background:url(' + this.borderLineOptionObject.src + ')  center center no-repeat;color:transparent;'
                )
            }
            if (this.view) {
                this.view.lineType = val
            }
        },
```

```javascript
  <el-input v-model='ruleForm.Name' class='reset-input-name' oninput='if(value.length>20)value=value.slice(0,20)'></el-input>
```

```javascript
   <el-table-column prop='position' label='对应广场说明书的位置' show-overflow-tooltip>
                    <template slot-scope='{row}'>
                        <span>{{ row.GraphCategorys.length?row.GraphCategorys.map(item => item.Name).join(' ，'):'' }}</span>
                    </template>
                </el-table-column>

```

```javascript
//<el-table>序号逐次增加，翻页时继续累加，解决翻页时从编号1开始的情况
        <el-table-column label="序号" type="index" align='center' width="50">
          <template scope="scope">
            {{ scope.$index + (currentPage - 1) * pageSize + 1 }}
          </template>
        </el-table-column>
```
