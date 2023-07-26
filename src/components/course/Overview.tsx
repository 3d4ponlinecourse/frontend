import ReactStars from 'react-stars'

const Overview = () => {
  return (
    <div>
      <div>
        Overview
        <p>About this section</p>
        {/* link desscription from homepage */}
        <p>{}</p>
      </div>

      {/* link comment from learning page */}
      <div>
        Reviews
        <p>Comment</p>
        <ReactStars />
      </div>
    </div>
  )
}

export default Overview
