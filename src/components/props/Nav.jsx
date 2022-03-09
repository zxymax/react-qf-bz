import React, { Component } from 'react'
import PropTypes from 'prop-types'

const SideBar = (props) => {
  const { bg } = props
  return (
    <>
      <ul style={{background: bg}}>
    <li>读书</li>
    <li>写书</li>
    <li>卖书</li>
    </ul>
    </>
  )
}

const Bar = () => {
  return (
    <>
      <SideBar bg="yellow" />
      <div>
        <h2>首页</h2>
        <Nav title="首页" leftShow={false}/>
      </div>
      <div>
        <h2>列表</h2>
        <Nav title="列表" leftShow={true}/>
      </div>
      <div>
        <h2>购物车</h2>
        <Nav title="购物车" leftShow={true}/>
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
      { leftShow && <button>返回</button> }
          navbar - {title}
        <button>Home</button>
      </div>
    )
  }
}

export default Bar
