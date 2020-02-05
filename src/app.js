import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import 'bulma'

import Home from './components/Home'
import CarIndex from './components/cars/CarIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import NewCar from './components/cars/NewCar'
import ShowCar from './components/cars/ShowCar'
import EditCar from './components/cars/EditCar'
import MyAccount from './components/MyAccount'
import Navbar from './Navbar'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/cars/:id/edit' component={EditCar} />
            <Route path='/cars/new' component={NewCar}></Route>
            <Route path='/cars/:id' component={ShowCar}></Route>
            <Route path='/myaccount' component={MyAccount}></Route>
            <Route path='/cars' component={CarIndex}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/login' component={Login}></Route>
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
