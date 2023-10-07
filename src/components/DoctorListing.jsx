import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Navigate, useNavigate } from 'react-router-dom';

const DoctorListing = ({ cardData }) => {
  const navigate = useNavigate();

  const handleAppointmentClick = (e, card) => {
    e.preventDefault();
    const cardId = card._id;
    navigate(`/patient/appointment-form/${cardId}`);
  };

  return (
    <Container>
      <Row className='g-4 mx-auto'>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} md={4}>
            <Card className='h-100'>
              <img src={card.imageUrl} className='card-img-top' alt={card.name} />
              <div className='card-body'>
                <h5 className='card-title'>{card.name}</h5>
                <p className='card-text'>
                  <strong>Degree:</strong> {card.degree}
                </p>
                <p className='card-text'>
                  <strong>Specialization:</strong> {card.specialization}
                </p>
                <p className='card-text'>
                  <strong>Experience:</strong> {card.experience} years
                </p>
              </div>
              <div className='card-footer'>
                <a
                  href={card.appointmentLink}
                  onClick={(e) => handleAppointmentClick(e, card)}
                  className='btn btn-primary'
                >
                  Get Appointment
                </a>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorListing;
