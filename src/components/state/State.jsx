import React, { Component } from 'react'

function getR() {
  return Math.random() * 100000
}

class State extends Component {
  constructor(props) {
    super(props)

    this.state = {
      val: '',
      name: '李秋水',
      list: [
        { id: getR(), name: '床前明月光' },
        { id: getR(), name: '疑是地上霜' },
        { id: getR(), name: '举头望明月' },
        { id: getR(), name: '低头思故乡' }
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

  addItem = () => {
    this.setState({
      list: [
        ...this.state.list,
        {
          id: getR(),
          name: this.state.val
        }
      ]
    })
  }

  handleChange = e => {
    this.setState({
      val: e.target.value
    })
    console.log(e)
  }

  handleDelete = _id => {
    this.setState(preState => {
      const list = [...preState.list]
      list.splice(_id, 1)
      return { list }
    })
  }

  render() {
    const { val, name, list } = this.state
    const listData =
      list.length > 0 ? (
        list.map((item, index) => (
          <li key={item.id}>
            <strong>{item.id}</strong>
            {item.name}{' '}
            <button onClick={() => this.handleDelete(index)}>
              delete item
            </button>
          </li>
        ))
      ) : (
        <p>no data</p>
      )
    return (
      <>
        <h1>作者：{name}</h1>
        <input type="text" value={val} onChange={this.handleChange} />
        <button onClick={this.setAuthor}>改变新作者</button>&nbsp;
        <button onClick={this.removeSC}>删除诗词</button>
        <button onClick={this.addItem}>添加内容</button>
        <ul>{listData}</ul>
      </>
    )
  }
}

export default State
