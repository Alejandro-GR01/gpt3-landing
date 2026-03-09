import './brand.css'
import { google, googleAvif, atlassian, atlassianAvif, dropbox, dropboxAvif, shopify, shopifyAvif, slack, slackAvif } from './imports'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

const Brand = () => {
  const brandRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)


    gsap.from('.gpt3__brand .brand-item', {
      scrollTrigger: {
        trigger: '.gpt3__brand',
        start: 'top 80%',

      },
      x: 200,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      delay: 0.3,
      ease: 'power2.inOut'
    })
  }, [{ scope: brandRef}])



  return (
    <div ref={brandRef}  className='gpt3__brand section__padding'>
      <div className='brand-item'>
        <picture>
          <source srcSet={googleAvif} type='image/avif' />
          <img src={google} alt="google" loading='lazy' />
        </picture>
      </div>
      <div className='brand-item'>
        <picture>
          <source srcSet={atlassianAvif} type='image/avif' />
          <img src={atlassian} alt="atlassian" loading='lazy'/>
        </picture>
      </div>
      <div className='brand-item'>
        <picture>
          <source srcSet={slackAvif} type='image/avif' />
          <img src={slack} alt="slack" loading='lazy' />
        </picture>
      </div>
      <div className='brand-item'>
        <picture>
          <source srcSet={dropboxAvif} type='image/avif' />
          <img src={dropbox} alt="dropbox" loading='lazy' />
        </picture>
      </div>
      <div className='brand-item'>
        <picture>
          <source srcSet={shopifyAvif} type='image/avif' />
          <img src={shopify} alt="shopify"  loading='lazy'/>
        </picture>
      </div>
    </div>
  )
}

export default Brand