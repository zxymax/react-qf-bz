#### props 组件通信以及 PropTypes 验证

- npm i prop-types

- import PropTypes from 'prop-types'

```jsx
const Bar = () => {
  return (
    <>
      <div>
        <h2>首页</h2>
        <Nav title="首页" leftShow={false} />
      </div>
      <div>
        <h2>列表</h2>
        <Nav title="列表" leftShow={true} />
      </div>
      <div>
        <h2>购物车</h2>
        <Nav title="购物车" leftShow={true} />
      </div>
    </>
  )
}

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    title: PropTypes.string,
    leftShow: PropTypes.bool
  }

  static defaultProps = {
    title: PropTypes.string,
    leftShow: PropTypes.bool
  }

  render() {
    const { title, leftShow } = this.props
    return (
      <div className="nav">
        {leftShow && <button>返回</button>}
        navbar - {title}
        <button>Home</button>
      </div>
    )
  }
}

export default Bar
```

#### Context 组件通信

- 引入 React.createContext() 解构两个属性 Provider Consumer
- Provider 提供数据
- Consumer 展示数据

```jsx
const { Provider, Consumer } = React.createContext()

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
              {user.name} - {user.age} - {user.city}
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
```
