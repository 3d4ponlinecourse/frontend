import { useEffect, useState } from 'react'

const useCourse = (id: string) => {
  const [course, setCourse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`http://localhost:8000/course/${id}`)
        const data = await res.json()

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
