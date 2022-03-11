import React, { Component } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

const FilmBoxUl = styled.ul`
  margin-top: 10px;
  margin-bottom: 10px;
  overflow-y: scroll;
  height: 300px;
  over
`

class Cinema extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cinemaList: []
    }
  }
  componentDidMount() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7902139',
      method: 'GET',
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res.data.data)
      this.setState(preState => ({
        cinemaList: [...preState.cinemaList, ...res.data.data.cinemas]
      }))
    })
  }

  handleInput = e => {
    const newList = this.state.cinemaList.filter(item => {
      return (
        item.name.toUpperCase().includes(e.target.value.trim().toUpperCase()) ||
        item.address.toUpperCase().includes(e.target.value.toUpperCase())
      )
    })

    this.setState({
      cinemaList: newList
    })
  }

  render() {
    const { cinemaList } = this.state
    const cinemaListData = cinemaList.map(item => {
      return (
        <li key={item.cinemaId}>
          <h3>{item.name}</h3>
          <p>{item.address}</p>
        </li>
      )
    })
    console.log(cinemaList)
    return (
      <div className="cinema" style={{ width: '600px', margin: '10px' }}>
        <h1>影院 component</h1>
        <input
          type="text"
          onChange={this.handleInput}
          style={{ width: '100%', height: '40px' }}
        />
        {cinemaList.length <= 0 ? (
          <p> no data </p>
        ) : (
          <FilmBoxUl>{cinemaListData}</FilmBoxUl>
        )}
      </div>
    )
  }
}

export default Cinema
