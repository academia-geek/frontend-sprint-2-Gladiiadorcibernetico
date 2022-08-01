import React , {useState,useEffect} from 'react'
import {Footer2,Img72,Img77,Div24,Div10,Div14,Div16,Div11, Div12, Div13, H33,  H44, H55,H66,Img6} from '../styles/styles'
import image from "../Imagenes/general/coinss.png";
import image2 from "../Imagenes/subs/user.svg";
import image3 from "../Imagenes/subs/arrow-up.svg";
import image4 from "../Imagenes/subs/arrow-down.svg";
import image5 from "../Imagenes/subs/credit-card.svg";
import image6 from "../Imagenes/subs/file-text.svg";
import image7 from "../Imagenes/subs/message-square.svg";
import image9 from "../Imagenes/subs/vector.png"
import image10 from "../Imagenes/subs/vector2.png"
import image11 from "../Imagenes/subs/vector3.png"
import image12 from "../Imagenes/subs/vector4.png"
import { IoIosNotificationsOutline } from "react-icons/io"
import {Link} from 'react-router-dom'






const Profile = () => {

    const[peticionUserName,setPeticionUserName] = useState('');
     
      useEffect(()=>{ getData()},[])

    const getData = () => {
      setPeticionUserName   (JSON.parse(localStorage.getItem('user')))
      
}

        const {name,coins} = peticionUserName
        console.log(peticionUserName)
    return (
        <section>
            <Div10>
                <Div11>
                    <H44>Hi {name} </H44>
                    <H66>Let's take tests on topics</H66>
                </Div11>

                <Div12>
                    <H55>{coins} </H55>
                    <Img6 src={image} alt="coin" />

                </Div12>

                <Div13>
                    <H33><IoIosNotificationsOutline /></H33>
                </Div13>

            </Div10>

            <Div16>
           
                <Div24>
                <Link to="/DataAcount">
                    <Div14>
                        <Img77 src={image2} alt="user" />
                    </Div14>
                </Link>
                    <h6>Personal information</h6>
                </Div24>
         
                <Div24>
                    <Div14>
                        <Img77 src={image3} alt="user" />
                        <Img77 src={image4} alt="user" />
                    </Div14>
                    <h6>Transaction history</h6>
                </Div24>

                <Div24>
                    <Div14>
                        <Img77 src={image5} alt="user" />
                    </Div14>
                    <h6>Payment</h6>
                </Div24>

                <Div24>
                    <Div14>
                        <Img77 src={image6} alt="user" />
                    </Div14>
                    <h6>Terms of use</h6>
                </Div24>

                <Div24>
                    <Div14>
                        <Img77 src={image7} alt="user" />
                    </Div14>
                    <h6>Support</h6>
                </Div24>
               
            </Div16>

            <Footer2>
                <Img72 src={image9} alt="icon" />
                <Link to="/HomeCourses"> <Img72 src={image10} alt="icon" /></Link>
                <Img72 src={image11} alt="icon" />
                <Link to="/Profile">  <Img72 src={image12} alt="icon" /></Link>
            </Footer2>


        </section>
    )
  }

    


export default Profile;