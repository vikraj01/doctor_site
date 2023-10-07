import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faMapMarker, faStethoscope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const DoctorAppointmentListing = () => {
  // Sample appointment data (replace with your actual data)
  const appointments = [
    {
      name: 'Patient 1',
      age: 30,
      address: '123 Main St',
      symptoms: 'Fever and cough',
      doctorName: 'Dr. Smith',
      date: '2023-10-15',
    },
    {
      name: 'Patient 2',
      age: 25,
      address: '456 Elm St',
      symptoms: 'Headache and fatigue',
      doctorName: 'Dr. Johnson',
      date: '2023-10-18',
    },
    {
      name: 'Patient 3',
      age: 25,
      address: '456 Elm St',
      symptoms: 'Headache and fatigue',
      doctorName: 'Dr. Johnson',
      date: '2023-10-18',
    },
    {
      name: 'Patient 4',
      age: 25,
      address: '456 Elm St',
      symptoms: 'Headache and fatigue',
      doctorName: 'Dr. Johnson',
      date: '2023-10-18',
    },
    // Add more appointments here
  ];

  const cardColors = ['#FFC107', '#03A9F4']; // Background colors for cards

  return (
    <Container style={{ backgroundColor: '#f5f5f5' }}>
      <h2 className="my-4 text-center">Appointments</h2>
      <Row>
        {appointments.map((appointment, index) => (
          <Col key={index} md={6} lg={4}>
            <Card
              className="mb-3"
              style={{
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16)',
                transition: 'background-color 0.3s ease-in-out',
              }}
            >
              <Card.Body style={{ padding: '16px' }}>
                <Card.Title
                  className="mb-4 primary"
                  style={{ color: '#333', fontSize: '18px', fontWeight: 'bold' }}
                >
                  <FontAwesomeIcon icon={faUser} /> <strong>Patient:</strong> {appointment.name}
                </Card.Title>
                <Card.Text style={{ fontSize: '16px' }}>
                  <FontAwesomeIcon icon={faInfoCircle} /> <strong>Age:</strong> {appointment.age}
                </Card.Text>
                <Card.Text style={{ fontSize: '16px' }}>
                  <FontAwesomeIcon icon={faMapMarker} /> <strong>Address:</strong> {appointment.address}
                </Card.Text>
                <Card.Text style={{ fontSize: '16px' }}>
                  <FontAwesomeIcon icon={faStethoscope} /> <strong>Symptoms:</strong> {appointment.symptoms}
                </Card.Text>
                <Card.Text style={{ fontSize: '16px' }}>
                  <FontAwesomeIcon icon={faUser} /> <strong>Doctor:</strong> {appointment.doctorName}
                </Card.Text>
                <Card.Text style={{ fontSize: '16px' }}>
                  <FontAwesomeIcon icon={faCalendar} /> <strong>Date:</strong> {appointment.date}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorAppointmentListing;
