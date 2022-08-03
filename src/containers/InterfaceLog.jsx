import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Div7, Div6,H1 ,INPUT,P,BtnNe, Footer} from '../styles/styles'
import axios from 'axios'


const url = "https://apiuserscmd.herokuapp.com/data"

class InterfaceLogin extends Component {

    constructor() {
        super()

        this.state = {
            data: [],
            texttelefono: '',
            textcontraseña: '',
            loader: false,
        }
    
    }

    /////////Montaje de estado
    componentDidMount() {

        setTimeout(() => {
            this.setState({
                loader: true
            })
        })
       this.peticionGet()
    }
    ////////////////consumo api
   
    peticionGet = async () => {
        let  {data}  = await axios.get(url)
        this.setState({data : data})
        console.log(data)
    }


    handleChangeTelefono=(e)=>{
        this.setState({ texttelefono: e.target.value })};
   handleChangeContraseña=(e)=>{
         this.setState({ textcontraseña: e.target.value })};
///////////////////////////////Login y validacion por submit////////////////////////

handleSubmit = (e) => {
    e.preventDefault();
    
     let phone = this.state.texttelefono
     let password = this.state.textcontraseña

    let filtrado = this.state.data.find(element  => element >phone)

    console.log(phone)
    console.log(password)
    console.log(filtrado)
  
    let contraseñauser = filtrado.password
    let phoneuser = filtrado.phone

    if(password == contraseñauser && phone == phoneuser){
      localStorage.setItem( 'user',  JSON.stringify(filtrado))
        window.location = '/HomeUser'
    }else{
         alert('Usuario o contraseña incorrecta')
    };
  
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////////
    render() {
        
        return (
           <section>
            <Div6 >
                <H1>Welcome back</H1>
                <P>Sign in to an existing account
                    using your phone number</P>
            </Div6>
           <Div7>
                <form onSubmit={this.handleSubmit}>
                    <INPUT value={this.state.texttelefono} name="texttelefono" onChange={this.handleChangeTelefono} type="number" placeholder='Number Phone' />
                    <INPUT value={this.state.textcontraseña} name="textcontraseña" onChange={this.handleChangeContraseña} type="password"  placeholder='Password'/>
               
                    <BtnNe  type="submit">Login</BtnNe>
                </form>

            </Div7>
            <Footer>
            <h6>Don’t have account ? </h6><Link to="/CreateAcount"> <h6>Sign up</h6></Link>
           </Footer> 
           </section>
        )
    }
}

export default InterfaceLogin;