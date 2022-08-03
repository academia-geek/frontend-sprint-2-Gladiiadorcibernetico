import React , {useState,useEffect} from 'react'
import {Img72,Img73,Div10,Div11,Img33, Div19, Div12, Div16,Div13,Section22, H33, H23, H44,H666, H55,H66,H333,Img6, Footer2} from '../styles/styles'
import image from "../Imagenes/general/coinss.png";
import image9 from "../Imagenes/subs/Vector.png"
import image10 from "../Imagenes/subs/vector2.png"
import image11 from "../Imagenes/subs/vector3.png"
import image12 from "../Imagenes/subs/vector4.png"
import { IoIosNotificationsOutline } from "react-icons/io"
import {Link} from 'react-router-dom'






const PageCourses = () => {

    
    const [pintar, setPintar] = useState([])
                    ////Recoleccion de data local y desesstructuracion///
    const[peticionUserName,setPeticionUserName] = useState('')
     
      useEffect(()=>{ getData()},[])

    const getData = () => {
      setPeticionUserName( JSON.parse(localStorage.getItem('user')))  
    }
    const {name,coins} = peticionUserName

                ///////////llamado Url/////////
                
                const getApi =  async ()=>{
                     const url =  "https://data-sprint-02.herokuapp.com/quiz"
                     const resp = await fetch(url)
                     const data = await resp.json()
                     
                     const desestructuracionDatos = data.map((datos)=>{
                        return{
                            id: datos.id,
                            titulo: datos.titulo,
                            imagen: datos.img,
                            descripcion: datos.descripcion,
                            link: datos.video,
                        }

                                      })
                     if(pintar <= pintar.length){
                      setPintar(desestructuracionDatos)
                      }
                       
                      console.log(pintar)
                      return desestructuracionDatos
                } 
                 
                getApi()
             
             

    return (
    

        <section >
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
                <H23>Topics to Study</H23>
<div>
                {
                    pintar.map((imagen)=>( 
                        <Link to="/InterfaceCourse">  
                            <Section22 id={imagen.id - 1} key={imagen.id} onClick={(e) => localStorage.setItem( 'idVideos',  JSON.stringify(e.target.id))}>
                                <Img33 id={imagen.id - 1} src={imagen.imagen} alt="" />
                                <Div19 id={imagen.id - 1} >
                                    <H333 id={imagen.id - 1}>{imagen.titulo}</H333>
                                    <H666 id={imagen.id - 1}> {imagen.descripcion}</H666>
                                </Div19>
                            </Section22>

                    </Link>
                    ) )
               }
           
</div>
               

            </Div16>


            <Footer2>
                <Img72 src={image9} alt="icon" />
                <Img73 src={image10} alt="icon" />
                <Img72 src={image11} alt="icon" />
                <Link to="/Profile">  <Img72 src={image12} alt="icon" /></Link>
            </Footer2>

        </section>
    )
  }




export default PageCourses;