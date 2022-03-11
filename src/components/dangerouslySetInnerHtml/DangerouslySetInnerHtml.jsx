import React, { Component } from 'react'

class DangerouslySetInnerHtml extends Component {
  constructor(props) {
    super(props)

    this.state = {
      val: '',
      info: '<p><i>这是一个段落</i></p>'
    }
  }

  handleChange = e => {
    this.setState(() => {
      return {
        val: e.target.value
      }
    })
  }

  render() {
    const { val, info } = this.state
    return (
      <>
        <input type="text" value={val} onChange={this.handleChange} />
        {val === '' ? null : (
          <div dangerouslySetInnerHTML={{ __html: val }}></div>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: info
          }}
        ></div>
      </>
    )
  }
}

export default DangerouslySetInnerHtml
