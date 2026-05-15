import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ModifyComment = ({ show, handleClose, refreshComments, commentsBook }) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA0MmE0YmIwMmIzZjAwMTViYmU1MzYiLCJpYXQiOjE3Nzg2NTc4NjcsImV4cCI6MTc3OTg2NzQ2N30.D2eobkTiqUH6bRh7iTb811bMEdlX2fIwkKesNv3sKW8'

    const [idComment, setIdComment] = useState('')

    const [comment, setComment] = useState({
        comment:'',
        rate: 1
    })
    
    const onSelectedComment = (e) => setIdComment(e.target.value)

    const onChangeInput = (e) => {
        const {name, value} = e.target
        setComment({
            ...comment,
            [name]: value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${idComment}`,{
                method: 'PATCH',
                body: JSON.stringify(comment),
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
                <Modal.Header closeButton>
                    <Modal.Title>Modifica un commento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                        <Form.Select 
                            aria-label="Default select example"
                            className='mb-3'
                            name='rate'
                            onChange={onChangeInput}
                        >
                            <option>Seleziona numero stelle</option>
                            <option value="1">1 stella</option>
                            <option value="2">2 stelle</option>
                            <option value="3">3 stelle</option>
                            <option value="4">4 stelle</option>
                            <option value="5">5 stelle</option>
                        </Form.Select>
                        <textarea 
                            className='form-control mb-4'
                            name='comment'
                            rows={5} 
                            onChange={onChangeInput}
                            placeholder='Scrivi il tuo commento...'
                        />

                        <button
                            type='submit'
                            className='btn btn-secondary'
                        >Modifica Commento</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModifyComment
