import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './HomePage/Home'
import Auth from './Auth/Auth'
import MyAccount from './MyAccount/MyAccount'
import Trending from './Announces/Trending/Trending'
import Add from './Announces/Add/Add'

const App = (props) => {
  const {name, id}=props
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/myAccount/:username/:id" component={MyAccount}/>
          <Route path="/authpage">
          {name ? <Redirect to={`/myAccount/${name}/${id}`}/> : <Auth/>}
          </Route>
          <Route path="/trending" component={Trending}/>
          <Route path="/Add/:id" component={Add}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
const mapStateToProps= state =>{
  return {
    name: state.auth.name,
    id: state.auth.id
  }
}

export default connect(mapStateToProps)(App)

