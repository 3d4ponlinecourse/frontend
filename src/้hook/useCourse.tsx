import React, { useEffect, useState } from 'react'

const useCourse = (id: string) => {
  const [course, setCourse] = useState(null)
  const []= useState()
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const res = await fetch(``)
        const data = await res.json()

        setCourse(data)
      } catch (err: any) {
        
      } finally {
        
      }
    }

    fetchData()
  }, [])

  return  {course, error}
}

export default useCourse