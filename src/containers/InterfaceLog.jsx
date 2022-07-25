import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Div7, Div6,H1 ,INPUT,P,BtnNe, Footer} from '../styles/styles';
import axios from 'axios'

const url = "https://github.com/Gladiiadorcibernetico/F12-Api/blob/main/data.json"

class InterfaceLogin extends Component {

    constructor(props) {
        super(props)

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
      
    }
    ////////////////consumo api
    componentDidMount() {
        this.peticionGet()
    }
    peticionGet = async () => {
        let { data } = await axios.get(url)
        this.setState({data : data})
    }


    handleChangeTelefono=(e)=>{
        this.setState({ texttelefono: e.target.value })};
   handleChangeContraseña=(e)=>{
         this.setState({ textcontraseña: e.target.value })};
///////////////////////////////Login y validacion por submit////////////////////////

handleSubmit = (e) => {
    e.preventDefault();
    
  
   
      let telefon = this.state.texttelefono;
     let contraseña = this.state.textcontraseña;



    let filtrado = this.state.data.find(element  => element > telefon)
    console.log(filtrado)
    let contraseñauser = filtrado.contraseña
    let phoneuser = filtrado.telefono

    if(contraseña == contraseñauser && telefon == phoneuser){
        alert('usuario y contraseña correctos')
    }else{
        alert('Usuario o contraseña incorrecta')
    }
  

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