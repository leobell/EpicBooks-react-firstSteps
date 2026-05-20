import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../../contexts/themeContext/ThemeContext';

const AddComment = ({ show, handleClose, asin, refreshComments }) => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA0MmE0YmIwMmIzZjAwMTViYmU1MzYiLCJpYXQiOjE3NzkyNjQ3ODAsImV4cCI6MTc4MDQ3NDM4MH0.QlYkzXiyREiMBQgpaPavSAbMAiPOmcl0eE1dB_Zbn0A'
    const { isDarkMode } = useContext(ThemeContext)
    const computedThemeBg = isDarkMode ? 'bg-light' : 'bg-dark'
    const computedThemeText = isDarkMode ? 'text-dark' : 'text-light'

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
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA0MmE0YmIwMmIzZjAwMTViYmU1MzYiLCJpYXQiOjE3Nzg2NTc4NjcsImV4cCI6MTc3OTg2NzQ2N30.D2eobkTiqUH6bRh7iTb811bMEdlX2fIwkKesNv3sKW8'
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
                    <Modal.Title className={`${computedThemeText}`}>Aggiungi un commento</Modal.Title>
                </Modal.Header>
                <Modal.Body className={`${computedThemeBg}`}>
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
                            className='btn btn-primary'
                        >Aggiungi Commento</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddComment
