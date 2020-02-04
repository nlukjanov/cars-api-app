import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewComment from './NewComment'
import Auth from '../../lib/auth'
import ShowComments from './ShowComments'

class ShowCar extends Component {
  state = {
    car: {},
    newComment: {
      text: ''
    }
  }

  async componentDidMount() {
    await this.getData()
  }

  async getData() {
    const carId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/cars/${carId}`)
      this.setState({ ...this.state, car: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      ...this.state,
      newComment: { [name]: value }
    })
  }

  handleCommentSubmit = async e => {
    e.preventDefault()
    const carId = this.props.match.params.id
    try {
      await axios.post(`/api/cars/${carId}/comments`, this.state.newComment, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      await this.getData()
      this.setState({ ...this.state, newComment: { text: '' } })
    } catch (err) {
      console.log(err)
    }
  }

  

  handleAddToFavorite = async () => {
    const currentUser = Auth.getPayload().sub
    try {
      await axios.post(`/api/users/${currentUser}/favorites/`, this.state.car, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleCommentDelete = async (e) => {
    const carId = this.props.match.params.id
    const carCommentId = e._id
    try {
      await axios.delete(`/api/cars/${carId}/comments/${carCommentId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      await this.getData()
      this.setState({ ...this.state, newComment: { text: '' } })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.car.comments) return null
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-half'>
              <figure className='image'>
                <img src={this.state.car.image} alt={this.state.car.make} />
              </figure>
              <br />
              {this.state.car.comments.map(comment => {
                return (
                  <ShowComments
                    key={comment._id}
                    {...comment}
                    handleCommentDelete={() => this.handleCommentDelete(comment)}
                  />
                )
              })}
            </div>
            <div className='column is-half'>
              <h4 className='title is-4'>
                Make: <span className='is-italic'>{this.state.car.make}</span>
              </h4>
              <hr />
              <h4 className='title is-4'>
                Model:{' '}
                <span className='is-italic'>{this.state.car.carModel}</span>
              </h4>
              <hr />
              <h4 className='title is-4'>
                Safety Rating:{' '}
                <span className='is-italic'>{this.state.car.safetyRating}</span>
              </h4>
              <hr />
              <h4 className='title is-4'>
                Description:{' '}
                <span className='is-italic'>{this.state.car.description}</span>
              </h4>
              <button onClick={this.handleAddToFavorite} className='button is-success'>
                Add to favorites ❤️
              </button>
              <Link
                to={`/cars/${this.state.car._id}/edit`}
                className='button is-info'
              >
                Edit Car
              </Link>
              <button onClick={this.handleDelete} className='button is-danger'>
                Delete Car ☠️
              </button>
              <hr />
              <NewComment
                handleCommentSubmit={this.handleCommentSubmit}
                handleChange={this.handleChange}
                text={this.state.newComment.text}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ShowCar
