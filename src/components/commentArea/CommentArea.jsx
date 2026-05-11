import React, { useEffect, useState } from 'react'
import AddComment from '../addComment/AddComment'
import CommentList from '../commentList/CommentList'

const CommentArea = ( { asin } ) => {
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ5Mjg0MDRlMGUwYjAwMTU5MmZlOGIiLCJpYXQiOjE3NzU4MzkyOTcsImV4cCI6MTc3NzA0ODg5N30.13FHx79lo0qcjVZCw8RCUoFYGPenRqT0s-SEX5UglyM'

  const [comments, setComments] = useState([])

  useEffect(() => {
    
    const getComments = async () => {
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin,
          {
            headers: {
              Authorization: token,
            },
          }
        )

        if(response.ok){
          let comments = await response.json()
          setComments(comments)
        }
        
      } catch (error) {
        console.error(error)
      }
    }
    
  }, [asin])

  const [showContent, setShowContent] = useState(false);

  const toggleAddComment = () => { setShowContent(!showContent) }

  return (
    <>
      <button
          className='btn btn-secondary'
          onClick={toggleAddComment}
      >Add Comment
      </button>

      <AddComment 
        show={showContent}
        handleClose={toggleAddComment}
        asin = {asin}
      />
      <CommentList 
        commentBook = {comments}
      />
    </>
  )
}

export default CommentArea

