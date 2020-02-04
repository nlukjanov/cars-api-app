import React, { Component } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

export class Login extends Component {

  state = {
    data: {
      email: '',
      password: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/login', this.state.data)
      Auth.setToken(res.data.token)
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
                <button className='button is-fullwidth'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login
