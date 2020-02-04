import React, { Component } from 'react'
import axios from 'axios'
import CarsDisplay from './CarsDisplay'

export class CarIndex extends Component {
  state = {
    cars: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/cars')
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

export default CarIndex
