import React , {useState,useEffect} from 'react'

import {ButtonE,ButtonF,ButtonG,ButtonH,Footer2,Img72,Img77,Div24,Div14,Div16} from '../styles/styles'

import image2 from "../Imagenes/subs/user.svg";
import image3 from "../Imagenes/subs/phone.svg";
import image4 from "../Imagenes/subs/mail.svg";
import image5 from "../Imagenes/subs/map-pin.svg";

import image9 from "../Imagenes/subs/vector.png"
import image10 from "../Imagenes/subs/vector2.png"
import image11 from "../Imagenes/subs/vector3.png"
import image12 from "../Imagenes/subs/vector4.png"
import {Link} from 'react-router-dom'
import useForm from '../Hooks/useForm';




const DataAcount = () => {

    //////////Traer funcionalidad del form

    const [datosForm,handleOnChange,reset] = useForm[{
    email:'',
    pass:'',
    nombre:'',
    phone:'',
    locat:'',
    }]


    /////////////
    const[peticionUserName,setPeticionUserName] = useState('')

    const[nombre,setNombre] = useState('false');
    const[mail,setMail] = useState('false')
    const[telefono,setTelefono] = useState('false')
   
    ///////traer info local storage y desestructuracion
      useEffect(()=>{ getData()},[])
    const getData = () => {
      setPeticionUserName   (JSON.parse(localStorage.getItem('user')))
      
}
        const {name,email,phone} = peticionUserName
        console.log(name,email,phone)


        /////aparicion y desaparicion de input para cambio
        const[showImputName, setShowImputName] = useState(false)
        const[showImputMail, setShowImputMail] = useState(false)
        const[showImputPhone, setShowImputPhone] = useState(false)
        const[showImputLocation, setShowImputLocation] = useState(false)

      ///////////handleSsubmit
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(datosForm)
        reset()
      }
        
    return (
        <div>
            <form onSubmit={handleSubmit}>
             <Div16>
           
           <Div24>
               <Div14>
                   <Img77 src={image2} alt="user" />
               </Div14>
               <h6>{name} </h6>
               {showImputName &&  <input type="text" name= "name" value={datosForm.name} onChange={handleOnChange} />  }
               <ButtonE onClick={()=>  setShowImputName(!showImputName)  }> Edit</ButtonE>
           </Div24>
    
           <Div24>
               <Div14>
                
                   <Img77  src={image4} alt="user" />
              
               </Div14>
               <h6>{email} </h6>
               {showImputPhone && <input type="text" name= "email" value={datosForm.email} onChange={handleOnChange} /> }
               <ButtonF onClick={()=>  setShowImputPhone(!showImputMail)  }> Edit</ButtonF>
           </Div24>

           <Div24>
               <Div14>
                   <Img77 src={image3} alt="user" />
               </Div14>
               <h6>{phone} </h6>
               {showImputMail && <input type="text" name= "phone" value={datosForm.phone} onChange={handleOnChange} /> }
               <ButtonG onClick={()=>  setShowImputMail(!showImputPhone)  }> Edit</ButtonG>
           </Div24>

           <Div24>
               <Div14>
                   <Img77 src={image5} alt="user" />
               </Div14>
               <h6>Location</h6>
               {showImputLocation && <input type="text" name= "locat" value={datosForm.locat} onChange={handleOnChange} />  }
               <ButtonH onClick={()=>  setShowImputLocation(!showImputLocation)  }> Edit</ButtonH>
           </Div24>

          
          
       </Div16>

       <Footer2>
           <Img72 src={image9} alt="icon" />
           <Link to="/HomeCourses"> <Img72 src={image10} alt="icon" /></Link>
           <Img72 src={image11} alt="icon" />
           <Link to="/Profile">  <Img72 src={image12} alt="icon" /></Link>
       </Footer2>
       </form>
        </div>
    )
};

export default DataAcount;