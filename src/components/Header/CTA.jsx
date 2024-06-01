import React from 'react'
import CV from '../../assets/Avinash_Jadhav_FullStack_CV.pdf'


const CTA = () => {
  return (
        <div className="cta">
            <a data-aos="fade-right" style={{width:"100px"}} href={CV} download className='btn'>CV</a>
            <a data-aos="fade-left" href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
    )
}

export default CTA
