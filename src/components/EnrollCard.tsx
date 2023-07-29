import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import useCourselist from '../hooks/useCourselist'
import Loading from './Loading'

const EnrollCard = () => {
  const { courselist, error, isLoading } = useCourselist()

  if (!courselist || isLoading) return <Loading />
  if (error) return <h1>{error}</h1>

  return (
    <div className="px-64">
      {courselist.map((item) => (
        <>
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={item.imageUrl} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h3" color="blue-gray" className="mb-2">
                {item.courseName}
              </Typography>
              <Typography>{item.description}</Typography>
              <Typography className="font-bold">{item.duration}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to="/learn">
                <Button color="teal" type="submit" value="submit">
                  Enroll this course
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </>
      ))}
    </div>
  )
}

export default EnrollCard
