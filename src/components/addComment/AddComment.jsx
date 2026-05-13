import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddComment = ({ show, handleClose, asin, refreshComments }) => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1NTVhZWJhMGYxMjAwMTUyZTc3NmUiLCJpYXQiOjE3Nzc1NzIzNzAsImV4cCI6MTc3ODc4MTk3MH0.dy6gGBLPrFz2TNWeWwcIWhVvTauLyAHGaKmx8kCrh-c'

    const [comment, setComment] = useState({
        comment:'',
        rate: 1,
        elementId: asin
    })

    
    console.log(comment)

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
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments',{
                method: 'POST',
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
                    <Modal.Title>Aggiungi un commento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={onSubmit}
                    >
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
                        >Aggiungi Commento</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddComment
