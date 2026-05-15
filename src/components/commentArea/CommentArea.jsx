import React, { useEffect, useState } from 'react'
import AddComment from '../addComment/AddComment'
import CommentList from '../commentList/CommentList'
import { Plus } from 'lucide-react'
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import ModifyComment from '../modifyComment/ModifyComment';
import DeleteComment from '../deleteComment/DeleteComment';
import SpinnerLoading from '../spinnerLoading/SpinnerLoading';
import ErrorAlert from '../errorAlert/ErrorAlert';

const CommentArea = ( { asin } ) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA0MmE0YmIwMmIzZjAwMTViYmU1MzYiLCJpYXQiOjE3Nzg2NTc4NjcsImV4cCI6MTc3OTg2NzQ2N30.D2eobkTiqUH6bRh7iTb811bMEdlX2fIwkKesNv3sKW8'

  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState('')
  const [comments, setComments] = useState([])

  const getComments = async () => {
    setIsLoading(true)
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
      setErrors(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getComments()
  }, [asin])

  const [showAddContent, setShowAddContent] = useState(false)
  const toggleAddComment = () => { setShowAddContent(!showAddContent) }

  const [showModifyContent, setShowModifyContent] = useState(false)
  const toggleModifyComment = () => { setShowModifyContent(!showModifyContent) }

  const [showDeleteContent, setShowDeleteContent] = useState(false)
  const toggleDeleteComment = () => { setShowDeleteContent(!showDeleteContent) }

  return (
    <> 
      <div className='d-flex gap-3'>
        <button
            className='btn btn-primary'
            onClick={toggleAddComment}
        ><Plus />
        </button>
        <button
            className='btn btn-secondary'
            onClick={toggleModifyComment}
        ><Pencil />
        </button>
        <button
            className='btn btn-danger'
            onClick={toggleDeleteComment}
        ><Trash2 />
        </button>
      </div>
      

      <AddComment 
        show={showAddContent}
        handleClose={toggleAddComment}
        asin = {asin}
        refreshComments={getComments}
      /> 
      <ModifyComment 
        show={showModifyContent}
        handleClose={toggleModifyComment}
        refreshComments={getComments}
        commentsBook = {comments}
      />
      <DeleteComment 
        show={showDeleteContent}
        handleClose={toggleDeleteComment}
        refreshComments={getComments}
        commentsBook = {comments}
      />
      <h4 className='mt-3'>Recensioni: </h4>

      {isLoading && (
        <SpinnerLoading />
      )}

      {errors && 
        <ErrorAlert 
          descriptionError = {errors}
        />}
      
      <CommentList 
        commentsBook = {comments}
      />
    </>
  )
}

export default CommentArea

