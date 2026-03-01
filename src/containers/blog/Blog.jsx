import { Article } from '../../components/index'
import { blogsPost } from '../../constants'
import './blog.css'




const Blog = () => {
  return (
    <div id='blog' className=" gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1  className='gradient__text'>A Lot Is Happening <br />We're blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        
        <div className='gpt3__blog-container_groupB'>
          {blogsPost.map((post, index)=> (

          <Article key={index} imgUrl={post.image} imgAvif={post.imageAvif} date={post.date} title={post.title} href={post.href}/>
          ))}
        
        </div>
      </div>
    </div>
  )
}

export default Blog