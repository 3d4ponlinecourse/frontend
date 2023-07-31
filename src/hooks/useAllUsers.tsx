import { useEffect, useState } from 'react'

const useUsers = () => {
  const [users, useUsers] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`http://localhost:8000/user`)
        const data = await res.json()

        useUsers(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { users, isLoading, error }
}

export default useUsers
