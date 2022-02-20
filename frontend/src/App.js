import logo from './logo.svg';
import './App.css';

import {ContainerListe} from "./components/containerListe";
import {Startseite} from "./Startseite";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login} from "./Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//import {Switch} from "react-router";
import history from "./Router/history";

import React from "react";
import Navigation from "./Navigation";
import {Register} from "./Register";
import {Profil} from "./Profil";
import {NewPassword} from "./NewPassword";
import {ResetPassword} from "./ResetPassword";


const App = () => {


  return (

      <div>
          <Navigation/>


    <Router history={history}>

        <Routes>

            <Route path="/login" element={<Login/>}/>


            <Route  path="/" element={<Startseite/>}/>

            <Route path="/register" element={<Register/>}/>

            <Route path="/profil" element={<Profil/>}/>

            <Route path="/newPassword" element={<NewPassword/>}/>

            <Route path="/resetPassword" element={<ResetPassword/>}/>

        </Routes>
    </Router>
      </div>

);
}

export default App;
