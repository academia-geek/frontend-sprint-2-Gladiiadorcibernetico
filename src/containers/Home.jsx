import React, { Component } from 'react'
import { Div, Img } from "../styles/styles"
import image from "../Imagenes/general/Logo.png"
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
    return (


<Div>
<Link to="/explored"><Img src={image} alt="img"  /></Link>
       
</Div>


    );
  }
}


  export default Home;