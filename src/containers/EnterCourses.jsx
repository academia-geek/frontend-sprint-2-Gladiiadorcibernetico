import React, { Component } from 'react'
import image from "../Imagenes/general/Svg3.png"
import { Div, Img , H1, P, Div3} from "../styles/styles"
import Slid from '../components/Slid'
import BtnNext from '../components/BtnNext'
import {Link} from 'react-router-dom'


 class EnterCourses extends Component {
  render() {
    return (
        <Div>
            <Img src={image} alt=""  />
       
            <Div3>
                <H1>Move on to the next course</H1>
         
             <P>Don't stop at one, start learning the next
                and make progress.</P>
            </Div3>
            <Slid/>
            <Link to="/EnterUser"> <BtnNext/></Link>
          
         
        </Div>  
    )
  }
}
export default EnterCourses;