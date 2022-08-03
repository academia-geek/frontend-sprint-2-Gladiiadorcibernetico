import React, { Component } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import InterfaceExplored from '../containers/InterfaceExplored'
import NavBa from '../components/NavBar';
import Home from '../containers/Home';
import InterfaceGoals from '../containers/InterfaceGoals';
import EnterCourses from '../containers/EnterCourses';
import Register from '../containers/Register';
import InterfaceLogin from '../containers/InterfaceLog';
import HomeUsers from '../containers/HomeUser'
import PageCourses from '../containers/PageCourses';
import Profile from '../containers/Profile';
import DataAcount from '../containers/DataAcount';
import InterfaceCourse from '../containers/InterfaceCourse';

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
            <Route path="/HomeUser" element={<HomeUsers/>} />
            <Route path="/HomeCourses" element={<PageCourses/>} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/DataAcount" element={<DataAcount/>} />
            <Route path="/InterfaceCourse" element={<InterfaceCourse/>} />
            </Routes>
        </BrowserRouter>    
    )
  }
}
export default AppRoutes;