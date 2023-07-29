import { useEffect, useState } from 'react'

const useProfile = () => {
  const [user, useUser] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)
  const id = localStorage.getItem('userId')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(`http://localhost:8000/user/enroll/${id}`)
        const data = await res.json()
        console.log(data)
        useUser(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    console.log(localStorage.getItem('userid'))
    fetchData()
  }, [])

  return { user, isLoading, error }
}

export default useProfile
