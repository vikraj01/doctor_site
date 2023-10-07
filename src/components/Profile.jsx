import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner'; 
import { updatePatientProfile, updateDoctorProfile } from '../api/api';
import formatDate from '../utils/formantDate';

const Profile = ({ profile }) => {
  
  const [formData, setFormData] = useState({
    name: profile ? profile.name : '',
    email: profile ? profile.email : '',
    phone: profile ? profile.phoneNo : '',
    dob: profile ? formatDate(profile.dob) : '',
    address: profile ? profile.address : '',
    imageUrl: profile ? profile.imageUrl : '',
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); 


    const role = JSON.parse(localStorage.getItem('user'))?.role
    
    try {
      let response;

      if(role==="doctor"){
        response = await updateDoctorProfile(formData);
      }else{
        response = await updatePatientProfile(formData);

      }
      console.log(response)
      if (response.status==200) {
        console.log('Data updated successfully');
        setError(null); 
      } else {
        console.error('Error updating data');
        setError('Error updating data. Please try again.'); 
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Network error. Please check your connection.'); 
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <Container>
      <Row className='mt-5'>
        <Col md={4}>
          <div
            className='img-fluid rounded-circle d-flex align-items-center justify-content-center'
            style={{
              width: '200px',
              height: '200px',
              backgroundImage: `url(${formData.imageUrl})`,
              backgroundSize: 'cover',
            }}
          >
            {isLoading && (
              <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            )}
          </div>
        </Col>
        <Col md={8}>
          <h2>
            <input
              type='text'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='form-control mb-2'
            />
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='email'>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type='email'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId='phone'>
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type='text'
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId='imageUrl'>
              <Form.Label>Image URL:</Form.Label>
              <Form.Control
                type='text'
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId='dob'>
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control
                type='date'
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId='address'>
              <Form.Label>Address:</Form.Label>
              <Form.Control
                as='textarea'
                rows={4}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </Form.Group>
            {error && <p className='text-danger'>{error}</p>}{' '}
            {/* Display error message */}
            <Button variant='primary' type='submit' className='mt-3'>
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
