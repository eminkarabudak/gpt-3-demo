import './brand.scss';

const Brand = () => {
  const brandData = [{
    title: "google",
    src: `${require("../../assets/images/google.png")}`
  },
  {
    title: "slack",
    src: `${require("../../assets/images/slack.png")}`
  },
  {
    title: "dropbox",
    src: `${require("../../assets/images/dropbox.png")}`
  },
  {
    title: "shopify",
    src: `${require("../../assets/images/shopify.png")}`
  },
  {
    title: "atlassian",
    src: `${require("../../assets/images/atlassian.png")}`
  }]

  return (
    <div className='brand section__padding'>
      {brandData.map((item, index) => (
        <div key={index}>
          <img src={item.src} alt={item.title} />
        </div>
      ))}
    </div>
  )
}

export default Brand