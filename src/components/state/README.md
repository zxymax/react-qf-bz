#### state 状态

> 状态就是组件描述某种显示情况的数据，由组件自己设置和更改

- 不能直接修改 state 值 需要使用 setState 来修改 state

> 列表渲染

- 为了列表的复用和重排 设置 key 值 提高性能

- 理想 key, item.id

- 不涉及到列表的增加 删除 重排 设置成索引没有问题

> setState 同步 异步

> > setState 处在同步的逻辑中 异步更新状态 更新真实 DOM

> > setState 处在异步的逻辑中 同步更新状态 同步更新真实 DOM

```jsx
// State.jsx

this.state = {
    name: '李秋水',
    list: [
      { id: 0, name: '床前明月光'},
      { id: 1, name: '疑是地上霜'},
      { id: 2, name: '举头望明月'},
      { id: 3, name: '低头思故乡'},
    ]

}


  setAuthor = () => {
    this.setState({
      name: '东方不败'
    })
  }

  removeSC = () => {
    this.setState({
      list: []
    })
  }



  render() {
    const { name, list } = this.state
    const listData = list.length>0?list.map(item => <li key={item.id}>{item.name}</li>):(<p>no data</p>)
    return (
      <>
        <h1>作者：{name}</h1>
        <button onClick={this.setAuthor}>改变新作者</button>&nbsp;
        <button onClick={this.removeSC}>删除诗词</button>
        <ul>
        {listData}
      </ul>
      </>
    )
  }
```
