import React, { Component } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import InterfaceExplored from '../containers/InterfaceExplored'
import NavBa from '../components/NavBar';
import Home from '../containers/Home';
import InterfaceGoals from '../containers/InterfaceGoals';
import EnterCourses from '../containers/EnterCourses';
import Register from '../containers/Register';
import InterfaceLogin from '../containers/InterfaceLog';

 class AppRoutes extends Component {
  render() {
    return (
        
        <BrowserRouter>
            <NavBa/>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/explored" element={<InterfaceExplored/>} />
            <Route path="/Goals" element={<InterfaceGoals/>} />
            <Route path="/EnterCourses" element={<EnterCourses/>} />
            <Route path="/EnterUser" element={<InterfaceLogin/>} />
            <Route path="/CreateAcount" element={<Register/>} />
         
            </Routes>
        </BrowserRouter>    
    )
  }
}
export default AppRoutes;