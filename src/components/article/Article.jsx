import { useRef } from 'react'
import './article.css'

const Article = ({ imgUrl, imgAvif, date, title, href }) => {
  const articleRef = useRef(null)

  const handleMove = (e) => {
    const el = articleRef.current
    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const percentX = (x - centerX) / centerX
    const percentY = (y - centerY) / centerY

    const rotateY = percentX * 5
    const rotateX = -percentY * 5


    const shadowX = percentX * -12
    const shadowY = 18 + percentY * -10

    el.style.setProperty('--rotateX', `${rotateX}deg`)
    el.style.setProperty('--rotateY', `${rotateY}deg`)
    el.style.setProperty('--shadowX', `${shadowX}px`)
    el.style.setProperty('--shadowY', `${shadowY}px`)
  }

  const handleLeave = () => {
    const el = articleRef.current

    el.style.setProperty('--rotateX', `0deg`)
    el.style.setProperty('--rotateY', `0deg`)
    el.style.setProperty('--depth', `0px`)
  }

  return (
    <a
      ref={articleRef}
      className='gpt3__article'
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      href={href}
    >
      <div className='gpt3__article-img'>
        <picture>
          <source srcSet={imgAvif} type='image/avif' />
          <img src={imgUrl} alt="blog-image" loading='eager' fetchPriority='high' />
        </picture>
      </div>

      <div className='gpt3__article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </a>
  )
}

export default Article