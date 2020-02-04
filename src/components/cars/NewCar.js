import React, { Component } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import CarForm from './CarForm'

export class NewCar extends Component {
  state = {
    data: {
      make: '',
      carModel: '',
      image: '',
      safetyRating: '',
      description: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/cars', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push(`/cars/${res.data._id}`)
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }
  render() {
    return (
      <div>
        <CarForm
          data={this.state.data}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default NewCar
