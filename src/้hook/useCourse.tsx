import { useEffect, useState } from 'react'

const useCourse = (id: string) => {
  const [course, setCourse] = useState(null)
  const [isLoading, setIsLoading]= useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const res = await fetch(``)
        const data = await res.json()

        setCourse(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        
      }
    }

    fetchData()
  }, [])

  return  {course, isLoading, error}
}

export default useCourse