import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Booking from './Component/Booking/Booking';
import Hotel from './Component/Hotel/Hotel';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Login from './Component/Authenticaion/Login';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import NoMatch from './Component/NoMatch/NoMatch';


export const userContext=createContext()
firebase.initializeApp(firebaseConfig);
function App() {

  const [showPlace,setshowPlace]=useState(
    {
      id:1,
      title:"Cox's Bazar",
      description:"Why Cox's Bazar is a Great Tourist Attraction Cox's Bazar Review. Cox's Bazar is famous for its long natural sandy sea beach. ... Cox's Bazar has the world's largest unbroken sea beach which stretches more than 120 km. The entire beach is a stretch of golden sandy sea beach which is reachable by motorbike.",
      img:"https://i.ibb.co/GpH6657/Rectangle-1.png"
  }
  )

  const [loggedIn,setLoggedIn]=useState(false)

  return (
    <userContext.Provider value={[showPlace,setshowPlace,loggedIn,setLoggedIn]}>
    <Router>
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/booking">
          <Booking/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <PrivateRoute path="/hotel">
          <Hotel/>
        </PrivateRoute>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
