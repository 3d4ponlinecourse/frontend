import { useEffect, useState } from "react";
import { ShowCourse } from "../types/course";

const useCourse = (courseId: number) => {
  const [course, setCourse] = useState<ShowCourse[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://localhost:8000/course/${courseId}`);
        const data = await res.json();

        setCourse(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { course, isLoading, error };
};

export default useCourse;
