import React, { Component } from 'react'
import image from "../Imagenes/general/Svg2.png"
import { Div, Img , H1, P, Div3} from "../styles/styles"
import Slid from '../components/Slid'
import BtnNext from '../components/BtnNext'
import {Link} from 'react-router-dom'

 class InterfaceGoals extends Component {
  render() {
    return (
        <Div>
            <Img src={image} alt=""  />
       
            <Div3>
                <H1>See your goals</H1>
         
             <P>Learn and learn new things every
                day and get rewards be on top</P>
            </Div3>
            
            <Slid/>
         
          <Link to="/EnterCourses"> <BtnNext/></Link>
          
        </Div>  
    )
  }
}
export default InterfaceGoals;