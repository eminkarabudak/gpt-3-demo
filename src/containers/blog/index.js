import { blog01, blog02, blog03, blog04, blog05 } from './import'
import Article from '../../components/article';

import './blog.scss';

const Blog = () => {
  const imgData = [
    {
      img: blog02,
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      img: blog03,
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      img: blog04,
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      img: blog05,
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    }]
  return (
    <div className='blog section__margin' id='blog'>
      <div className="blog__heading">
        <h1 className='gradient__text'>A lot is happening,
          We are blogging about it.</h1>
      </div>
      <div className="blog__container">
        <div className="blog__container--bigBox">
          <Article imgUrl={blog01} date="Sep 26, 2021" text='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        <div className="blog__container--smallBox">
          {imgData.map((item, index) => (
            <Article key={index} imgUrl={item.img} date={item.date} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog