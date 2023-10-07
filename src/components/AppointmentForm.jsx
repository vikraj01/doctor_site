import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { createAppointment } from '../api/api'
import { useNavigate, useParams } from 'react-router-dom'

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patient: '',
    age: 0,
    address: '',
    symptoms: ''
  })

  const [error, setError] = useState('')

  const handleChange = e => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const navigate = useNavigate()

  const {doctorId} = useParams();
  const handleSubmit = async e => {
    e.preventDefault()
    console.log("submitting...")
    try {
      // const { doctorId } = useParams()
      const patientId = JSON.parse(localStorage.getItem('user'))?.data._id
      const response = await createAppointment({ ...formData, doctorId, patientId })
      console.log(response)
      if (response.status === 201) {
        navigate('/patient/appointments/')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <h2>Book an Appointment</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='patient'>
              <Form.Label>Patient:</Form.Label>
              <Form.Control
                type='text'
                name='patient'
                required
                value={formData.patient}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='age'>
              <Form.Label>Age:</Form.Label>
              <Form.Control
                type='number'
                name='age'
                required
                value={formData.age}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='address'>
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type='text'
                name='address'
                required
                value={formData.address}
                onChange={handleChange}
              />
            </Form.Group>

            {/* <Form.Group controlId='symptoms'>
              <Form.Label>Time:</Form.Label>
              <Form.Control
                type='text'
                name='symptoms'
                required
                value={formData.symptoms}
                onChange={handleChange}
              />
            </Form.Group> */}

            <Form.Group controlId='symptoms'>
              <Form.Label>Reason for Appointment:</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                required
                name='symptoms'
                value={formData.reason}
                onChange={handleChange}
              />
            </Form.Group>
            {error && <p className='text-danger'>{error}</p>}
            <Button variant='primary' type='submit' className='mt-3'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default AppointmentForm
