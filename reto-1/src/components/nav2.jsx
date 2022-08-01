import React , {useState,useEffect} from 'react'
import {Div10,Div11, Div12, Div13, H33,  H44, H55,H66,Img6, } from '../styles/styles'
import image from "../Imagenes/general/coinss.png";

import { IoIosNotificationsOutline } from "react-icons/io"







const Nav2 = () => {

    const[peticionUserName,setPeticionUserName] = useState('');
   

      
     
      useEffect(()=>{ getData()},[])

    const getData = () => {
      setPeticionUserName   (JSON.parse(localStorage.getItem('user')))
      
}

        const {nombre} = peticionUserName
    return (
        <section>
            <Div10>
                <Div11>
                    <H44>Hi {nombre} </H44>
                    <H66>Let's take tests on topics</H66>
                </Div11>

                <Div12>
                    <H55>cant</H55>
                    <Img6 src={image} alt="coin" />

                </Div12>

                <Div13>
                    <H33><IoIosNotificationsOutline /></H33>
                </Div13>

            </Div10>


            

        </section>
    )
  }

    


export default Nav2;