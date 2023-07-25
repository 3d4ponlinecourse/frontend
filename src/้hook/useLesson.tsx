import { useEffect, useState } from "react"

const useLesson = (id: string) => {
    const [lesson , useLesson] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(``)
          const data = await res.json()
  
          useLesson(data)
        } catch (err: any) {
          setError(err.message)
        } finally {
          
        }
      }
  
      fetchData()
    }, [])
  
    return { lesson, isLoading, error }
  }
  
  export default useLesson