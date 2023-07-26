import React, { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'

const Create = () => {
  const navigate = useNavigate()
  const [rating, setRating] = useState<number>(0)
  const [comment, setComment] = useState<string>('')

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault()
    const token = localStorage.getItem('token')

    try {
      await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application.json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          comment,
          rating,
        }),
      })
      toast.success('Succesfully!!')
      navigate('/')
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <form
      onSubmit={handleCreate}
      className="flex flex-col gap-6 max-w-lg bg-inherit rounded-xl mx-auto my-14 py-5 px-7"
    >
      <h2 className="font-bold text-5xl text-center">Reviews</h2>
      <div className="flex flex-col gap-2 font-bold text-xl">
        <label>Comment:</label>
        <input
          className="p-3 rounded"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center gap-2 font-bold text-xl">
        <label>Rating:</label>
        <ReactStars
          count={5}
          value={rating}
          onChange={(rating) => setRating(rating)}
          size={24}
          color2={'#F2BE22'}
          half={false}
        />
      </div>

      <button className="bg-teal-500 p-3 rounded-lg text-white hover:bg-teal-700 text-xl">Submit</button>
    </form>
  )
}

export default Create
