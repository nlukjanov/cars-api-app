import React, { Component } from 'react'
import axios from 'axios'

export class Register extends Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/register', this.state.data)
      this.props.history.push('/cars')
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <form
              onSubmit={this.handleSubmit}
              className='column is-half is-offset-one-quarter'
            >
              <div className='field'>
                <label className='label'>Username</label>
                <div className='control'>
                  <input
                    type='text'
                    name='username'
                    className='input'
                    autoComplete='on'
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                  <input
                    type='text'
                    name='email'
                    className='input'
                    autoComplete='on'
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Password</label>
                <div className='control'>
                  <input
                    type='password'
                    name='password'
                    className='input'
                    autoComplete='on'
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className='field'>
                <label className='label'>Password Confirmation</label>
                <div className='control'>
                  <input
                    type='password'
                    name='passwordConfirmation'
                    className='input'
                    autoComplete='on'
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className='field'>
                <button className='button is-fullwidth'>Register</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Register
