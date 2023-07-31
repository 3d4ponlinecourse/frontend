import { useEffect, useState } from 'react'

const useEnrollment = (userId: string) => {
  const [enrollment, useEnrollment] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`http://localhost:8000/enrollment/${userId}`)
        const data = await res.json()

        useEnrollment(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { enrollment, isLoading, error }
}

export default useEnrollment
