#### dangerouslySetInnerHtml

```jsx
constructor(props){
  super(props)
  this.state = {
      info: '<p><i>这是一个段落</i></p>'
    }
  }
<div dangerouslySetInnerHtml={{__html: info}}></div>
```
