import React, { Component } from 'react'
import Clock from './Clock'


const { Provider, Consumer } = React.createContext()


class LifeCycleParent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      User: {
        author: 'Jorna'
      }
    }
  }

  render() {
    const { User } = this.state
    return (
      <>
      <Provider value={User}>
        <LifeCycleComp city="北京" />
      </Provider>

        <input
          type="button"
          value="换个名字"
          onClick={() =>
            this.setState(preState => ({
              User: { ...preState.User, author: '北京开发者杜甫' }
            }))
          }
        />
      </>
    )
  }
}

class LifeCycleComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'hong10'
    }
  }

  componentDidMount() {
    console.log('组件挂载之后 执行')
  }

  componentDidUpdate() {
    console.log('更新之后执行')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props)
    if(this.state.name !== nextState.name) {
      return true
    }
    if(this.props.city !== nextProps.city) {
      return true
    }
    return false
  }

  render() {
    const { name } = this.state
    return (
      <>
        <h1>生命周期</h1>
        <Clock />
        <div>
        <h3>{name}</h3>

      <Consumer>
        {user => {
          return (
            <h1>{user.author}</h1>
          )
        }}
      </Consumer>
        <button onClick={() => this.setState(() => ({name: 'taisuke'}))}>
        修改姓名</button>
      </div>
      </>
    )
  }
} 

export default LifeCycleParent

