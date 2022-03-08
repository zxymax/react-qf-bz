import React, { Component } from 'react'
import styled from '@emotion/styled'

const TabBox = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
`

const UlList = styled.ul`
  list-style: none;
  display: flex;
  position: fixed;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
`
const Ulli = styled.li`
  flex: 1;
  cursor: pointer;
  text-align: center;

  &.active {
    color: red;
  }
`

const Film = () => {
  return (
    <>
      <h1>电影 Component</h1>
    </>
  )
}

const Cinema = () => {
  return (
    <>
      <h1>影院 Component</h1>
    </>
  )
}

const Center = () => {
  return (
    <>
      <h1>个人中心 Component</h1>
    </>
  )
}

class Tab extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      list: [
        { id: 0, text: '电影' },
        { id: 1, text: '影院' },
        { id: 2, text: '我的' }
      ]
    }
  }

  handleClick = index => {
    this.setState(() => ({ current: index }))
  }

  switchPanel = () => {
    switch (this.state.current) {
      case 0:
        return <Film />
      case 1:
        return <Cinema />
      case 2:
        return <Center />
      default:
        return null
    }
  }

  render() {
    const { list, current } = this.state
    return (
      <TabBox>
        {this.switchPanel()}
        <UlList>
          {list &&
            list.map((item, index) => (
              <Ulli
                key={item.id}
                onClick={() => this.handleClick(index)}
                className={current === index ? 'active' : ''}
              >
                {item.text}
              </Ulli>
            ))}
        </UlList>
      </TabBox>
    )
  }
}

export default Tab
