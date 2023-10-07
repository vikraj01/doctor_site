import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom' // Import Link for navigation
import { useNavigate } from 'react-router-dom'
import { doctorLogin } from '../../api/api'

const DoctorLoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      if (user.role == 'patient') {
        navigate('/patient/')
      } else if (user.role == 'doctor') {
        navigate('/doctor/')
      } else {
        localStorage.clear()
        navigate('/')
      }
    }
  }, [])

  const handleLogin = async e => {
    e.preventDefault()

    try {
      const response = await doctorLogin(formData)

      if (response.statusText === 'OK') {
        const { data } = response
        data.role = 'doctor'
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/doctor/')
      } else {
        // Handle login failure
        setError('Invalid email or password. Please try again.')
      }
    } catch (error) {
      console.error('Error logging in:', error)
      setError('Invalid Credentials')
    }
  }

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <h2>Doctor Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId='email'>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            {error && <p className='text-danger'>{error}</p>}
            <Button
              variant='primary'
              type='submit'
              style={{ marginTop: '10px' }}
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default DoctorLoginForm
