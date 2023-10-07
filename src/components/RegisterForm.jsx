import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'
import { patientRegister } from '../api/api'
const defaultData = {
  name: '',
  email: '',
  phoneNo: '',
  password: '',
  dob: '',
  address: '',
  imageUrl: ''
}
const RegisterForm = () => {
  const [formData, setFormData] = useState(defaultData)
  const [error, setError] = useState("")
  const navigate = useNavigate()

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

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    let response;
    
    try {
      response = await patientRegister(formData)
      if(response.status === 409){
        setError("User Already Exists!");
      }else if(response.status === 500){
        setError(response.data.message);
      }else{
        console.log('Registration successful')
        navigate('/patient-login')
      }
      setFormData(defaultData)
    } catch (error) {
      
      setError("User Already Exist!");
    }
  }

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <h2>Register for an Account</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='name'>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
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
            <Form.Group controlId='phoneNo'>
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type='text'
                name='phoneNo'
                value={formData.phoneNo}
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
            <Form.Group controlId='imageUrl'>
              <Form.Label>Profile Image:</Form.Label>
              <Form.Control
                type='text'
                name='imageUrl'
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId='dob'>
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control
                type='date'
                name='dob'
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId='address'>
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type='text'
                name='address'
                value={formData.address}
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
              Register
            </Button>

            <p>
              Already have an account?{' '}
              <Link to='/patient-login'>Login here</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterForm
