import React, { useEffect, useState } from "react"
import { IUserWithEnrollment } from "../types/enrollment"

const useUser = () => {
    const [user , setUser] = useState<IUserWithEnrollment>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const user = localStorage.getItem("user")
      const token = localStorage.getItem("token")
      const fetchData = async () => {
        setIsLoading(true)
        try {
          const res = await fetch(`http://localhost:8000/user/enroll/${user}`,{headers: {"Content-Type":"application/json",Authorization: `Bearer ${token}`}})
          const data = await res.json()
  
          setUser(data)
          console.log(user)
          console.log(data)
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