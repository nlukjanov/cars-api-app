import React, { Component } from 'react'
import axios from 'axios'
import CarsDisplay from './cars/CarsDisplay'
import Auth from '../lib/auth'

class MyAccount extends Component {
  state = {
    cars: []
  }

  async componentDidMount() {
    const currentUser = Auth.getPayload().sub
    try {
      const res = await axios.get(`/api/myaccount/${currentUser}`)
      this.setState({ cars: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div className='section'>
        <h1 className='title is-1 has-text-centered'>
          My Favorite Cars
        </h1>
        <CarsDisplay cars={this.state.cars} />
      </div>
    )
  }
}

export default MyAccount
