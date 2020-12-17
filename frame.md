```javascript
   setMess() {
      this.$nextTick(_ => {
        let iframe = document.getElementById("google_ads_frame2")
        iframe.onload = () => {
          iframe.contentWindow.postMessage(this.setData, "*")
        }
      })
    }
```
```html
   <iframe
      id="google_ads_frame2"
      name="google_ads_frame2"
      frameborder="0"
      width="100%"
      height="600px"
      :src="iframeSrc"
      marginwidth="0"
      marginheight="0"
      vspace="0"
      hspace="0"
      allowtransparency="true"
      scrolling="no"
      allowfullscreen="true"
    ></iframe>
```
