import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'

import 'aos/dist/aos.css'

const Header = () => {


  return (
    <header>
       <article className="container header__container">
         <h5 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="1200" >Hello I'm</h5>
         <h1 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="1000" >Avinash Jadhav</h1>
         <h5 data-aos="fade-up" data-aos-anchor=".header__container" data-aos-duration="900" className="text-light">Full-stack Software Developer(MERN)</h5>
         <CTA/>

         <HeaderSocial />


         <div className="logo">
           <img className='logo-image' data-aos="slide-up" data-aos-anchor=".logo"  data-aos-duration="1400" src='https://images.unsplash.com/photo-1635732346025-d0ed3500ea7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGV0dGVyJTIwYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt="me" />
         </div>
        
        
         <a href="#contact"  className="scroll__down">Scroll Down {'>>'} </a>
       </article>


    </header>
  )
}

export default Header