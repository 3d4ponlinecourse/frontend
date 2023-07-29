import { useEffect, useState } from 'react'
import { ShowCourse } from '../types/course'

const useCourselist = () => {
  const [courselist, setCourselist] = useState<ShowCourse[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`http://localhost:8000/course`)
        const data = await res.json()

        setCourselist(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { courselist, isLoading, error }
}

export default useCourselist
