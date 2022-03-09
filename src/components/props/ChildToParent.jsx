import React, { Component } from 'react'
import styled from '@emotion/styled'

const NavBox = styled.div`
  height: 30px;
  background: #ccc;
  font-size: 14px;
  font-weight: bold;
`

class ChidComp extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const { sidebar, handleClick } = this.props
    return(
      <NavBox>
        <button onClick={() => handleClick()}>{sidebar}</button>
      </NavBox>
    )
  }
}

const SideBarBox = styled.ul`
  list-style: none;
  line-height: 20px;
  background-color: blue;
  color: #fff;
`


class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <SideBarBox>
        <li>开心鬼</li>
        <li>鬼打鬼</li>
        <li>僵尸叔叔</li>
        <li>僵尸先生</li>
      </SideBarBox>
      </>
    )
  }
}


class ParentComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true,
      sidebar: '菜单隐藏'
    }
  }

  handleClick = () => {
    if (this.state.isShow) {
      this.setState({
        sidebar: '菜单隐藏'
      })
    } else {
      this.setState({
        sidebar: '菜单显示'
      })
    }
    this.setState({
      isShow: !this.state.isShow,
    })
  }

  render() {
    const { isShow, sidebar } = this.state
    return (
      <>
        <h1>父子通信</h1>
        <ChidComp sidebar={sidebar} handleClick={this.handleClick} />
        { isShow && <SideBar />}
      </>
    )
  }
}

export default ParentComp
