import React, { createRef, Component } from 'react'

class RefComponent extends Component {
  constructor(props) {
    super(props)

    this.inputRef = createRef()
    this.firstWay = this.firstWay.bind(this)
  }

  firstWay() {
    // 需要绑定this 改变this指向 到组件 若不绑定this 值是undefined
    console.log(this.inputRef.current.value)
  }

  secondWay = () => {
    // ES6语法 this指向 组件
    console.log(this)
    console.log(this.inputRef.current.value)

    this.setState({
      val: this.inputRef.current.value
    })
  }

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.firstWay}>First Way Get Input Value</button>
        <button onClick={this.secondWay}>Second Way Get Input Value</button>
      </>
    )
  }
}

export default RefComponent
