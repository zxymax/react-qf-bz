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
