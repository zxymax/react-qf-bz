#### createRef

> Ref 的应用

> > 给标签设置 ref="username"

- 通过获取 this.refs.name，ref 可以获取到应用的真实 DOM

> > 新的写法

```jsx
myRef = React.createRef()
<div ref={this.myRef}>hello</div>
// 通过 this.myRef.current 访问
```

> 需导入 createRef

import { createRef } from 'react'

```jsx
import { createRef } from 'react';

constructor(props) {
  super(props)
  this.inputRef = createRef()
  this.firstWay = this.firstWay.bind(this)
}

firstWay() { // 需要绑定this 改变this指向 到组件 若不绑定this 值是undefined
  console.log(this.inputRef.current.value)
}

<button onClick={this.firstWay}>First Way Get Input Value</button>
```
