import React, { useEffect, useState } from "react"
import { UserDto } from "../types/types"

const useUser = (id: string) => {
    const [user , useUser] = useState<UserDto>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        try {
          const res = await fetch(`http://localhost:8000/${id}`)
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