import React from 'react'
import Alert from 'react-bootstrap/Alert'

const Welcome = () => {
  return (
    <Alert variant="success" className='mb-4'>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. <strong>Welcome</strong> to our e-book shop. Are you looking for a new book?
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, ask us.
      </p>
    </Alert>
  )
}

export default Welcome
