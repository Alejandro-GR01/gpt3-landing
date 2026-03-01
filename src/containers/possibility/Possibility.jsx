
import possibility from '../../assets/possibility.png'
import possibilityAvif from '../../assets/possibility.avif'
import './possibility.css'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding  ' id='possibility'>
      <div className='gpt3__possibility-image'>
        <picture className='animate-float animation-duration_15s'>
          <source srcSet={possibilityAvif} type='image/avif' />
          <img src={possibility} alt="Possibility" loading='eager' fetchPriority='high'/>
        </picture>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Imagine a future where AI adapts to your creative vision, unlocking experiences and solutions that were once unimaginable.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility