import React, { useRef } from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Footer = () => {
    const footerRef = useRef(null)

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.gpt3__footer', {
      scrollTrigger:{
        trigger:'.gpt3__footer',
        start: 'top 90%',
      },
      y: 300,
      opacity: 0,
      duration: 1.5,
      ease: 'elastic.Out'
    })
  }, [{scope: footerRef}])
  return (
    <div ref={footerRef} className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do You Want to Step Into the Future Before Others?</h1>
      </div>

      <button type='button' className=' button gpt3__footer-btn'>
        Request Early Access
      </button>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="gpt3-logo" loading='lazy' />
          <p>123 Innovation Street, San Francisco, CA </p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overview</p>
          <p>Social Media</p>
          <p>Resources</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>

        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Cretchetword K12 182 DK Alknh</p>
          <p>098-765432</p>
          <p>info@payme.net</p>

        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>© 2025 GPT-3. All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer