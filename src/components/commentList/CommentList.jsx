import React from 'react'
import SingleComment from '../singleComment/SingleComment'

const CommentList = ({ commentsBook }) => {

  console.log(commentsBook)
  
  return (
    <div>
      
      {commentsBook.map((comment) => {
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
