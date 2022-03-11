import React, { Component } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

class Film extends Component {
  constructor(props) {
    super(props)

    this.state = {
      films: []
    }
  }

  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=4&pageSize=10&type=1&k=7843086',
      method: 'GET',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.setState(preState => ({
        films: [...preState.films, ...res.data.data.films]
      }))
    })
  }

  render() {
    return (
      <>
        <h1>电影 Component</h1>
      </>
    )
  }
}

export default Film
