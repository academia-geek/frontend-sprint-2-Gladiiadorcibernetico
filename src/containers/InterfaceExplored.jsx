import React, { Component } from 'react'
import image from "../Imagenes/general/Svg.png"
import { Div, Img , H1, P, Div3} from "../styles/styles"
import Slid from '../components/Slid'
import BtnNext from '../components/BtnNext'
import {Link} from 'react-router-dom'

 class InterfaceExplored extends Component {
  render() {
    return (

        <Div>
            <Img src={image} alt=""  />
       
            <Div3>
                <H1>Explore new courses</H1>
         
             <P>Study and watch all our new courses
             and there are many of them</P>
            </Div3>
            <Slid/>
             
            <Link to="/Goals"><BtnNext/></Link>
          
        </Div>  
     
        
      
           
    
    )
  }
}

export default InterfaceExplored;