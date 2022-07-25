import React, { Component } from 'react'
import { Div6, Div7, INPUT, H1, P, BtnNe, FORM, Section2 } from "../styles/styles"
import axios from 'axios'

const url = "http://localhost:3005/data"

class Register extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      textnombre: '',
      textmail: '',
      texttelefono: '',
      textcontraseña: '',
    
loader:false,
    } }
 
    /////////Montaje de estado
    componentDidMount(){
      
      setTimeout(()=> {
        this.setState({
          loader:true
        })
      })
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
  handleChangeEmail=(e)=>{
        this.setState({ textmail: e.target.value })};
  handleChangeTelefono=(e)=>{
       this.setState({ texttelefono: e.target.value })};
  handleChangeContraseña=(e)=>{
        this.setState({ textcontraseña: e.target.value });
         console.log(this.state.textcontraseña)  }


  handleSubmit = (e) => {
    e.preventDefault();
    


    axios.post(url,  
    
   {   nombre: this.state.textnombre,
      mail: this.state.textmail,
      telefono: this.state.texttelefono,
      contraseña: this.state.textcontraseña
  }
    )
    .then(res => {
    console.log(res);
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