import { useEffect, useState } from 'react'
import { IUserWithEnrollment } from '../types/enrollment'

const useUser = (id: string) => {
  const [user, useUser] = useState<IUserWithEnrollment>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`http://localhost:8000/user/enroll/${id}`)
        const data = await res.json()

        useUser(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { user, isLoading, error }
}

export default useUser
