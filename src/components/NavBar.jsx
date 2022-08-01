import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import { AiOutlineWifi } from "react-icons/ai";
import { Div2 } from '../styles/styles';
import image from "../Imagenes/general/Battery.png"
import image2 from "../Imagenes/general/signal.png"
import image3 from "../Imagenes/general/Wifi.png"

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
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image} alt="" />
              
              </Div2>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
export default NavBa; 