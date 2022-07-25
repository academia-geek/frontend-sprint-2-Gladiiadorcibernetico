import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import { BsReception4 } from "react-icons/bs";
import { BsBatteryFull } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { Div2 } from '../styles/styles';

 class NavBa extends Component {
  render() {
    return (
        <Navbar>
        <Container>
          <Navbar.Brand href="#home"> <Div2><AiOutlineWifi/></Div2></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Div2>  
                <BsReception4/>
                <AiOutlineWifi/>
                <BsBatteryFull/>
              
              </Div2>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
export default NavBa; 