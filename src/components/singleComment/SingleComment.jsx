import React from 'react'

const SingleComment = ({ rate, comment }) => {
  console.log(rate)
  return (
    <div className='my-3'>
      <p className='fw-semibold mb-0'>{rate}/5</p>
      <p>{comment}</p>
    </div>
  )
}

export default SingleComment
