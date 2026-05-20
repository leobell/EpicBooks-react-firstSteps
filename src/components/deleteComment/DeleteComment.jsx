import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../../contexts/themeContext/ThemeContext';

const DeleteComment = ({ show, handleClose, refreshComments, commentsBook }) => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA0MmE0YmIwMmIzZjAwMTViYmU1MzYiLCJpYXQiOjE3NzkyNjQ3ODAsImV4cCI6MTc4MDQ3NDM4MH0.QlYkzXiyREiMBQgpaPavSAbMAiPOmcl0eE1dB_Zbn0A'

    const { isDarkMode } = useContext(ThemeContext)
    const computedThemeBg = isDarkMode ? 'bg-light' : 'bg-dark'
    const computedThemeText = isDarkMode ? 'text-dark' : 'text-light'

    const [idComment, setIdComment] = useState('')

    const onSelectedComment = (e) => setIdComment(e.target.value)

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${idComment}`,{
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json',
                    Authorization: token
                }
            })

            if(response.ok){
                handleClose()
                refreshComments()
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                
            >
                <Modal.Header className={`${computedThemeBg}`} closeButton>
                    <Modal.Title className={`${computedThemeText}`}>Elimina un commento</Modal.Title>
                </Modal.Header>
                <Modal.Body className={`${computedThemeBg}`}>
                    <form
                        onSubmit={onSubmit}
                    >
                        <Form.Select 
                            aria-label="Default select example"
                            className='mb-3'
                            name='commentList'
                            onChange={onSelectedComment}
                            value={idComment}
                        >
                            <option>Seleziona commento</option>
                            {commentsBook.map((commentBook) => {
                                return <option value={commentBook._id} key={commentBook._id}>{commentBook.comment}</option>
                            })}
                            
                        </Form.Select>

                        <button
                            type='submit'
                            className='btn btn-danger'
                        >Elimina Commento</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default DeleteComment
