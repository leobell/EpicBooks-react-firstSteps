import React from 'react'

const CommentList = ({ commentBook }) => {
  return (
    <div>
      {commentBook.map((comment) => {
        <p className='mb-3'> {comment} </p>
      })}
    </div>
  )
}

export default CommentList
