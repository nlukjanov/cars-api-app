import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from './lib/auth'

class Navbar extends Component {

  handleLogout = () => {
    Auth.logout()
    this.props.history.push('/')
  }
  render() {
    return (
      <nav className='navbar'>
        <Link className='navbar-item' to='/'>
          Home Page
        </Link>
        <Link className='navbar-item' to='/cars'>
          Car Index
        </Link>
        {!Auth.isAuthenticated() && (<Link className='navbar-item' to='/register'>
          Register
        </Link>)}
        {!Auth.isAuthenticated() && (<Link className='navbar-item' to='/login'>
          Login
        </Link>)}
        {Auth.isAuthenticated() && (<Link className='navbar-item' to='/cars/new'>
          Create New Car
        </Link>)}
        <Link className='navbar-item' to='/myaccount'>
          My Account
        </Link>
        {Auth.isAuthenticated() && (<a onClick={this.handleLogout} className='navbar-item'>
          Logout
        </a>)}
      </nav>
    )
  }
}

export default withRouter(Navbar)
