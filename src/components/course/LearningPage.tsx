import React from 'react'
import { Rating, Textarea, Button, Dialog, Progress } from '@material-tailwind/react'
import ReactPlayer from 'react-player'

// const menu = [
//   { name: 'Overview', link: '' },
//   { name: 'Q&A', link: '' },
//   { name: 'Notes', link: '' },
//   { name: 'Reviews', link: '' },
// ]

const review = [
  { id: 1, author: 'wave', comment: 'This course is so good', star: 5, date: '12/12/12' },
  { id: 2, author: 'shinn', comment: 'This course is so noob', star: 3, date: '13/12/11' },
]

const LearningPage = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(!open)
  return (
    <div className="px-64 py-8 flex flex-col gap-8">
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      {/* overview */}
      {/* review */}

      <div className="flex flex-col gap-8 w-2/3">
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-col">
            <h3 className="font-bold text-xl">Course Rating</h3>
            <p className="text-7xl font-bold text-teal-400">3.0</p>
            <Rating value={3} readonly unratedColor="teal" ratedColor="teal" />
          </div>
          {/* ratingBar */}
          <div className="w-3/4 flex flex-col">
            <div className="flex flex-row items-center gap-4">
              <Progress value={50} color="teal" size="sm" />
              <Rating value={5} readonly unratedColor="teal" ratedColor="teal" />
            </div>
            <div className="flex flex-row items-center gap-4">
              <Progress value={50} color="teal" size="sm" />
              <Rating value={4} readonly unratedColor="teal" ratedColor="teal" />
            </div>
            <div className="flex flex-row items-center gap-4">
              <Progress value={50} color="teal" size="sm" />
              <Rating value={3} readonly unratedColor="teal" ratedColor="teal" />
            </div>
            <div className="flex flex-row items-center gap-4">
              <Progress value={50} color="teal" size="sm" />
              <Rating value={2} readonly unratedColor="teal" ratedColor="teal" />
            </div>
            <div className="flex flex-row items-center gap-4">
              <Progress value={50} color="teal" size="sm" />
              <Rating value={1} readonly unratedColor="teal" ratedColor="teal" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">Reviews</h3>
          {review.map((item) => (
            <div key={item.id} className="flex flex-col gap-2 border-2 p-2 rounded-lg">
              <p className="font-bold text-lg">{item.author}</p>
              <div>
                <Rating value={item.star} readonly unratedColor="teal" ratedColor="teal" />
                <p>{item.comment}</p>
              </div>

              <p className="text-gray-500">reviewed at {item.date}</p>
            </div>
          ))}
          <Button color="teal" onClick={handleOpen} variant="gradient">
            Review this course
          </Button>
          <Dialog open={open} handler={handleOpen}>
            <div className="flex flex-col p-8 gap-2">
              <h2 className="font-bold text-lg">Write your review here.</h2>
              <Textarea color="teal" label="Message" />
              <Rating value={5} unratedColor="teal" ratedColor="teal" />
              <Button color="teal">Submit</Button>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default LearningPage
