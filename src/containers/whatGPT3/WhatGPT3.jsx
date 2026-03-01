
import './whatgpt3.css'
import Feature from '../../components/feature/Feature'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const WhatGPT3 = () => {
  const whatRef = useRef(null)

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.container.gpt3__whatgpt3', {
      scrollTrigger:{
        trigger:'#whgpt3',
        start: 'top 90%',
      },
      y: 300,
      opacity: 0,
      duration: 1.5,
      ease: 'elastic.Out'
    })
  }, [{scope: whatRef}])


  return (
    <div ref={whatRef} className='section__margin' id='whgpt3'>
      <div className='container gpt3__whatgpt3 '>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="GPT-3 is a powerful language model that can generate coherent text, answer questions, and perform complex tasks across numerous domains with minimal prompting."/>

      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p >
          Explore the Library
        </p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        
        <Feature title="Chatbots" text="Intelligent chatbots that converse naturally, assist users, and automate conversations without losing context."/>
        <Feature title="Knowledge Base" text="A central repository powered by GPT-3 where information is indexed, searchable, and dynamically updated."/>
        <Feature title="Education" text="AI-driven tutoring and content creation tools that personalize learning experiences for every student."/>
      </div>

      </div>
    </div>
  )
}

export default WhatGPT3