
import './header.css'
import people from '../../assets/people.png'
import peopleAvif from '../../assets/people.avif'
import ai from '../../assets/ai.png'
import aiAvif from '../../assets/ai.avif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Header = () => {

  const headerRef = useRef(null)
  useGSAP(() => {
    gsap.from('.gpt3__header-content .item', {
      x: -300,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.inOut'
    })
    gsap.from('.gpt3__header-image', {
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: 'power2.inOut'
    })
  }, [{ scope: headerRef }])


  return (
    <div ref={headerRef} className='gradient__bg gpt3__header-bg'>
      <div className='gpt3__header section__padding ' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text item' >Let's Build Something Amazing with GPT-3 by OpenAI</h1>
          <p className='item'>With OpenAI’s GPT-3, you can build intelligent applications, automate workflows, and explore innovative ideas — all using natural language.</p>
          <form className='gpt3__header-content_input item'>
            <input type="email" placeholder='Your Email Address' />
            <button type='button'>Get Started</button>
          </form>
          <div className='gpt3__header-content_people item'>
            <picture>
              <source srcSet={peopleAvif} type='image/avif' />
              <img  src={people} alt="people" loading="eager"
  fetchPriority="high" />
            </picture>
            <p>1,600 people requested access or visited in the last 24 hours</p>
          </div>


        </div>

        <div className='gpt3__header-image'>
          <picture className='animate-float'>
            <source srcSet={aiAvif} type='image/avif' />
            <img src={ai} alt="ai" loading="eager"
              fetchPriority="high" />
          </picture>
        </div>
      </div>

    </div>
  )
}

export default Header