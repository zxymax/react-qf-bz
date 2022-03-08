import React, { Component } from 'react'

class State extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '李秋水',
      list: [
        { id: 0, name: '床前明月光'},
        { id: 1, name: '疑是地上霜'},
        { id: 2, name: '举头望明月'},
        { id: 3, name: '低头思故乡'},
      ]
    }
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
}

export default State
