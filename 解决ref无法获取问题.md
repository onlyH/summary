```javascript
    showDialog(data) {
          this.floorData = data || {};
          this.floorData = tools.desFormatData(this.floorData)
          this.timeoutSetVal()
          this.dialogVisible = true;
        },
        timeoutSetVal() {
          setTimeout(() => {
            if (this.$refs.formItems) {
              this.$refs.formItems.form = this.floorData
            } else {
              this.timeoutSetVal()
            }
          }, 500)
        },
```
