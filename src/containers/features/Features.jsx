import './features.css'
import { Feature } from '../../components'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { featureData } from '../../constants'






const Features = () => {
  const featuresRef = useRef(null)

  useGSAP(()=> {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#features',
        start: 'top 90%',
      }
    })
    tl.from('.gpt3__features-heading', {
      x:-300,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    }).from('#features .gpt3__features-container__feature', {
      x:-100,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.2
    })
    
   


  }, [{scope:featuresRef}])


  return (
    <div ref={featuresRef} className='gpt3__features section__padding ' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future Is Now.</h1>
        <p>You just need to realize it. Step into the future today and make it happen.</p>
      </div>
      <div className='gpt3__features-container'>
        {featureData.map((feature, index)=> (
          <Feature key={feature.title + index} text={feature.text} title={feature.title} />
        ))}
      </div>

    </div>
  )
}

export default Features