import { useEffect, useState } from 'react'
import { ShowCourse } from '../types/course'

const useCourse = (id: number) => {
  const [course, setCourse] = useState<ShowCourse>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`http://localhost:8000/course/${id}`)
        const data = await res.json()
        console.log(data)

        setCourse(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { course, isLoading, error }
}

export default useCourse
