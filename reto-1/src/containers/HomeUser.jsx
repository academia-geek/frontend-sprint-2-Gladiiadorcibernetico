import React, { Component } from 'react'
import { Img72, Div10, Div11, Img33, Div19, Div12, H22, Div15, Div13, Section22, H33, H23, H44, H42, H666, H55, H62, H66, H41, H333, Img6, H61, Img7, Img8, DIVimg, Footer3 } from '../styles/styles'
import { IoIosNotificationsOutline } from "react-icons/io";
import image from "../Imagenes/general/coinss.png";
import image2 from "../Imagenes/general/Img.png";
import image3 from "../Imagenes/general/Img2.png"
import image4 from "../Imagenes/subs/Svg5.png"
import image5 from "../Imagenes/subs/Svg4.png"
import image6 from "../Imagenes/subs/Svg3.png"
import image7 from "../Imagenes/subs/Svg2.png"
import image8 from "../Imagenes/subs/Svg.png"
import image9 from "../Imagenes/subs/vector.png"
import image10 from "../Imagenes/subs/vector2.png"
import image11 from "../Imagenes/subs/vector3.png"
import image12 from "../Imagenes/subs/vector4.png"
import { Link } from 'react-router-dom'

class HomeUsers extends Component {

  constructor() {
    super()

    this.state = {
      nombre: '',
      coins: '',
      loader: false,
    }

  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({
        loader: true
      })

    })
    this.peticionUser()
  }

  peticionUser = () => {
    let dataUser = JSON.parse(localStorage.getItem('user'))
    const { name, coins } = dataUser
console.log(dataUser)
    this.setState({ nombre: name , coins:coins})
  }



  render() {
    console.log(this.state.nombre)
    console.log(this.state.coins)
    return (


      <section>
        <Div10>
          <Div11>
            <H44>Hi,{this.state.nombre} </H44>
            <H66>Let’s start learning</H66>
          </Div11>

          <Div12>
            <H55>{this.state.coins}</H55>
            <Img6 src={image} alt="coin" />

          </Div12>

          <Div13>
            <H33><IoIosNotificationsOutline /></H33>
          </Div13>

        </Div10>


        <H22>Courses</H22>
        <DIVimg>
          <div>
            <Img7 src={image3} alt="course" />
            <H41>Elementary</H41>
            <H61>For beginners and intermediates</H61>
          </div>
          <div>
            <Img8 src={image2} alt="course" />
            <H42>Advanced</H42>
            <H62>For advanced</H62>
          </div>
        </DIVimg>



        <Div15>
          <H23>Topics to Study</H23>
          <Section22>
            <Img33 src={image4} alt="" />
            <Div19>
              <H333>In the kitchen</H333>
              <H666>Talking about food in the kitchen</H666>
            </Div19>
          </Section22>
          <Section22>

            <Img33 src={image5} alt="" />

            <Div19>
              <H333>Bulletin board</H333>
              <H666>Shopping conversation topic near bulletin board</H666>
            </Div19>
          </Section22>

          <Section22>
            <Img33 src={image6} alt="" />
            <Div19>
              <H333>Night city</H333>
              <H666>Night walk through the night city and a trip to a cafe</H666>
            </Div19>
          </Section22>

          <Section22>
            <Img33 src={image7} alt="" />
            <Div19>
              <H333>Plan for the day</H333>
              <H666>Mikey plans his day</H666>
            </Div19>
          </Section22>

          <Section22>
            <Img33 src={image8} alt="" />
            <Div19>
              <H333>Two friends</H333>
              <H666>Friends talk and tell their stories</H666>
            </Div19>
          </Section22>

          <Footer3>
            <Img72 src={image9} alt="icon" />
            <Link to="/HomeCourses"> <Img72 src={image10} alt="icon" /></Link>
            <Img72 src={image11} alt="icon" />
            <Link to="/Profile">  <Img72 src={image12} alt="icon" /></Link>
          </Footer3>

        </Div15>




      </section>


    )
  }
}

export default HomeUsers;