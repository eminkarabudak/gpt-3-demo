import './article.scss'
const Article = ({ imgUrl, date, text }) => {
  return (
    <div className='article'>
      <div className="article__container">
        <div className="article__img">
          <img src={imgUrl} alt="imgUrl" />
        </div>
        <div className="article__content">
          <div className="article__content--topSide">
            <p>{date}</p>
            <h3>{text}</h3>
          </div>
          <div className="article__content--bottomSide">
            <p>Read Full Article</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Article