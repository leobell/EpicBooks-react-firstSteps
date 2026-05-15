import Alert from 'react-bootstrap/Alert'

const ErrorAlert = ({descriptionError}) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Ops</Alert.Heading>
      <p>
        {descriptionError}
      </p>
    </Alert>
  )
}

export default ErrorAlert
