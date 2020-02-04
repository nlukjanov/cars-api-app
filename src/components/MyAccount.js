import React, { Component } from 'react'
import axios from 'axios'
import CarsDisplay from './cars/CarsDisplay'

class MyAccount extends Component {
  state = {
    cars: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/cars')
      console.log(res.data)
      this.setState({ cars: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div className='section'>
        <CarsDisplay cars={this.state.cars} />
      </div>
    )
  }
}

export default MyAccount
