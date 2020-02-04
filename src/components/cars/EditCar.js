import React, { Component } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import CarForm from './CarForm'

class EditCar extends Component {
  state = {
    data: {
      make: '',
      carModel: '',
      image: '',
      safetyRating: '',
      description: '',
      comments: [],
      newComment: ''
    }
  }

  async componentDidMount() {
    const carId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/cars/${carId}`)
      this.setState({ ...this.state, data: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const carId = this.props.match.params.id
    try {
      const res = await axios.put(`/api/cars/${carId}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken('token')}` }
      })
      this.props.history.push(`/cars/${res.data._id}`)
    } catch (err) {
      console.log(err)
    }
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

export default EditCar
