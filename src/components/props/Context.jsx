import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

const Container = () => {
  return <Title />
}

const Title = () => {
  return (
    <div>
      <Consumer>
        {user => {
          return (
            <div>
哈哈哈              {user.name} - {user.age} - {user.city}
            </div>
          )
        }}
      </Consumer>
    </div>
  )
}

class ContextComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      User: {
        age: 19,
        name: 'Jorna',
        city: 'Beijing'
      }
    }
  }

  render() {
    const { User } = this.state
    return (
      <>
        <h1>Context 通信</h1>
        <Provider value={User}>
          <Container />
        </Provider>
        <input
          type="button"
          value="change value"
          onClick={() =>
            this.setState(preState => ({
              User: { ...preState.User, age: preState.User.age + 1 }
            }))
          }
        />
        <hr />
      </>
    )
  }
}

export default ContextComp
