import React from 'react'
import SingleComment from '../singleComment/SingleComment'

const CommentList = ({ commentBook }) => {

  console.log(commentBook)
  
  return (
    <div className='mt-3'>
      <h4>Recensioni: </h4>
      {commentBook.map((comment) => {
        return(
          <SingleComment
          rate = {comment.rate}
          comment = {comment.comment}
          key={comment._id}
          />
        )
      })}
    </div>
  )
}

export default CommentList
