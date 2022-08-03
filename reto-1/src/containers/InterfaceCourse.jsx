
import React , {useState} from 'react'
import ReactPlayer from 'react-player';
import {ButtonO,Section99,Div99,P15,Div00,P102,H333} from '../styles/styles';
import "./style.css"

const InterfaceCourse = () => {


const idVideo = Number(JSON.parse(localStorage.getItem('idVideos')))


const [urlPintarVideo, setUrlPintarVideo] = useState('')
const [pregunta, setPregunta] = useState([])
const [opciones,setOpciones] = useState([])

const [valor,setValor] = useState('false')

const getApi =  async ()=>{
    const url =  "https://data-sprint-02.herokuapp.com/quiz"
    const resp = await fetch (url)
    const data = await resp.json()

    const dataActual = data[idVideo]
    const pregunta = dataActual.pregunta
    const video = dataActual.video

    const opciones =  dataActual.opciones
    setOpciones(opciones)
    setUrlPintarVideo(video)
    setPregunta(pregunta)
};

    getApi()



 function chequeoResp(id){
      
            if(id === true){ console.log("la respuesta es correcta") }
                
             

 }
    return (


        <section>
        <div>
        <Div99 >
           <ReactPlayer 
        url={urlPintarVideo}
        width= '90%'
        height= '50%'
           />
        </Div99>

        </div>


        <Section99>
     {
                    opciones.map((opc)=>( 
                    <div>

                            <P15>{pregunta} </P15>

                            <Div00>  
                              <ButtonO  id={opc.isCorrect} onClick= {(e)=>chequeoResp(e.target.id) }><svg id={opc.isCorrect} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                             <path id={opc.isCorrect} fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg></ButtonO>  
                              <H333 >{opc.textoRespuesta}</H333>
                            </Div00>

                                
                    </div>
       ) )
                } </Section99> 
 

 </section>  
    
 )
};
export default InterfaceCourse;