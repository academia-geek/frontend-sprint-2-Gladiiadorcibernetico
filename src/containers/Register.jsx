import React, { Component } from 'react'
import { Div6, Div7, INPUT, H1, P, BtnNe, Section2 } from "../styles/styles"
import axios from 'axios'


const url = "https://apitrabajos.herokuapp.com/data"

class Register extends Component {

  constructor() {
    super()

    this.state = {
      data: [],
      textnombre: "",
      textmail: "",
      texttelefono: "",
      textcontraseña: "",
    
loader:false,
    } }
 
    /////////Montaje de estado
    componentDidMount(){
      
      setTimeout(()=> {
        this.setState({
          loader:true
        })
      })
      this.handleSubmit()
 }
    ////////////////consumo api
    componentDidMount(){
      this.peticionGet()
       }

            peticionGet = async ()=>{
            let {data} = await axios.get(url)
                console.log(data)
            }

  
   handleChangeName=({target})=>{
       this.setState({ textnombre: target.value })};
  handleChangeEmail=({target})=>{
        this.setState({ textmail: target.value })};
  handleChangeTelefono=({target})=>{
       this.setState({ texttelefono: target.value })};
  handleChangeContraseña=({target})=>{
        this.setState({ textcontraseña: target.value });
         console.log(this.state.textcontraseña)  }


  handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(url,  
    
   { id:'', 
     name: this.state.textnombre,
      email: this.state.textmail,
      phone: this.state.texttelefono,
      password: this.state.textcontraseña,
      coins: 0,
   
  }
    )
    .then(res => {
    
    console.log(res.data);
     })
  }





  render() {
  
    return (
      <Section2>
        <Div6 >
          <H1>Create new Account</H1>

          <P>Create a new account by filling in all the
            fields or log in to an existing account</P>
        </Div6>
        <Div7>
          <form onSubmit={this.handleSubmit}>
            <div>
              <INPUT value={this.state.textnombre} name="textnombre" onChange={this.handleChangeName} type="text"   placeholder='Name and lastname' />
              <INPUT value={this.state.textmail} name="textmail" onChange={this.handleChangeEmail} type="email"   placeholder='mail' />
              <INPUT value={this.state.texttelefono} name="texttelefono" onChange={this.handleChangeTelefono} type="number"   placeholder='Telefono' />
              <INPUT value={this.state.textcontraseña} name="textcontraseña" onChange={this.handleChangeContraseña} type="password"  placeholder='Contraseña' />
            </div>
                 <BtnNe  type="submit">Create</BtnNe>
          </form>
        </Div7>
      </Section2>
    )
  }  }



export default Register;