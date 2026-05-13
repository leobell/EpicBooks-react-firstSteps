import React, { useEffect, useState } from 'react'
import AddComment from '../addComment/AddComment'
import CommentList from '../commentList/CommentList'

const CommentArea = ( { asin } ) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA0MmE0YmIwMmIzZjAwMTViYmU1MzYiLCJpYXQiOjE3Nzg2NTc4NjcsImV4cCI6MTc3OTg2NzQ2N30.D2eobkTiqUH6bRh7iTb811bMEdlX2fIwkKesNv3sKW8'

  const [comments, setComments] = useState([])
  const getComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
        {
          headers: {
            Authorization: token,
          },
        }
      )

      if(response.ok){
        let comments = await response.json()
        setComments(comments)
        console.log(comments)
      }
      
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getComments()
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
        refreshComments={getComments}
      />
      <CommentList 
        commentBook = {comments}
      />
    </>
  )
}

export default CommentArea

