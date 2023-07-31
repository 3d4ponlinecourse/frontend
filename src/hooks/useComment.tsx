import { useEffect, useState } from "react";
import { IComment } from "../types/comment";

const useComment = (id: number) => {
  const [comment, setComment] = useState<IComment>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://localhost:8000/comment`);
        const data = await res.json();
        console.log(data);

        setComment(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { comment, isLoading, error };
};

export default useComment;
