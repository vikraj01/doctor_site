import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Header from '../components/Header'

const ErrorPage = () => {
  const errorStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7'
  }

  const errorMessageStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px'
  }

  return (
    <div style={errorStyle}>
      <Header />
      <Container>
        <Row>
          <Col md={8} className='mx-auto text-center'>
            <div style={errorMessageStyle}>Oops! Something went wrong.</div>
            <p>We couldn't find the page you were looking for.</p>
            <p>Please check the URL or go back to the homepage.</p>
            <Button variant='primary' href='/'>
              Go to Homepage
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ErrorPage
