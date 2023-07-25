import { useEffect, useState } from "react"

const useContent = (id: string) => {
    const [user , useUser] = useState(null)
    const [] = useState()
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(``)
          const data = await res.json()
  
          useUser(data)
        } catch (err: any) {
          setError(err.message)
        } finally {
          
        }
      }
  
      fetchData()
    }, [])
  
    return { user, error }
  }
  
  export default useContent