import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nowTime: new Date().toLocaleTimeString(),
      timer: null
    }
  }

  componentDidMount() {
    this.setState(() =>({
      timer: setInterval(() => {
        this.setState(() => ({
          nowTime: new Date().toLocaleTimeString()
        }))
      }, 1000)
    }))
  }

  componentWillUnmount() {
    if (this.state.timer) {
      clearInterval(this.state.timer)
    }
  }

  render() {
    return (
      <>
        <h3>{this.state.nowTime}</h3>
      </>
    )
  }
}

export default Clock
