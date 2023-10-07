import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendar,
  faMapMarker,
  faStethoscope,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import formatDate from '../../utils/formantDate';

const AppointmentListing = ({ appointments }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const cardColors = ['#FFC107', '#03A9F4']; 

  const handleCardClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAppointment(null);
  };

  return (
    <Container style={{ backgroundColor: '#f5f5f5' }}>
      <h2 className="my-4 text-center">Appointments</h2>
      <Row>
        {appointments?.map((appointment, index) => (
          <Col key={index} md={6} lg={4}>
            <Card
              className="mb-3"
              style={{
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16)',
                transition: 'background-color 0.3s ease-in-out',
                cursor: 'pointer', 
              }}
              onClick={() => handleCardClick(appointment)}
            >
              <Card.Body style={{ padding: '16px' }}>
                <Card.Title
                  className="mb-4 primary"
                  style={{
                    color: '#333',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  <FontAwesomeIcon icon={faUser} /> <strong>Patient:</strong>{' '}
                  {appointment.patient}
                </Card.Title>
                <Card.Text style={{ fontSize: '16px' }}>
                  <FontAwesomeIcon icon={faInfoCircle} /> <strong>Age:</strong>{' '}
                  {appointment.age}
                </Card.Text>
                <Card.Text style={{ fontSize: '16px' }}>
                  <FontAwesomeIcon icon={faMapMarker} />{' '}
                  <strong>Address:</strong> {appointment.address}
                </Card.Text>
                <Card.Text style={{ fontSize: '16px' }}>
                  <FontAwesomeIcon icon={faStethoscope} />{' '}
                  <strong>Symptoms:</strong>{' '}
                  {appointment.symptoms.length > 30
                    ? `${appointment.symptoms.slice(0, 30)}...`
                    : appointment.symptoms}
                </Card.Text>
                <Card.Text style={{ fontSize: '16px' }}>
                  <FontAwesomeIcon icon={faUser} /> <strong>Doctor:</strong>{' '}
                  {appointment.doctorId.name}
                </Card.Text>
                <Card.Text style={{ fontSize: '16px' }}>
                  <FontAwesomeIcon icon={faCalendar} /> <strong>Date:</strong>{' '}
                  {formatDate(appointment.createdAt)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedAppointment && (
            <>
              <p>
                <strong>Patient:</strong> {selectedAppointment.patient}
              </p>
              <p>
                <strong>Age:</strong> {selectedAppointment.age}
              </p>
              <p>
                <strong>Address:</strong> {selectedAppointment.address}
              </p>
              <p>
                <strong>Symptoms:</strong> {selectedAppointment.symptoms}
              </p>
              <p>
                <strong>Doctor:</strong> {selectedAppointment.doctorId.name}
              </p>
              <p>
                <strong>Date:</strong>{' '}
                {formatDate(selectedAppointment.createdAt)}
              </p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AppointmentListing;
