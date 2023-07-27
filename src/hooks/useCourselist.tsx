import { useEffect, useState } from 'react'

const useCourselist = () => {
  const [courselist, useCourselist] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`http://localhost:8000/course`)
        const data = await res.json()

        useCourselist(data)
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
