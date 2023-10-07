import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const EventCard = ({ date, title, time, points, buttonText }) => {
  return (
    <Col lg={4}>
      <Card className="card-margin">
        <Card.Header className="no-border">
          <h5 className="card-title">{date}</h5>
        </Card.Header>
        <Card.Body className="pt-0">
          <div className="widget-49">
            <div className="widget-49-title-wrapper">
              <div className="widget-49-date-primary">
                <span className="widget-49-date-day">{date.split(' ')[0]}</span>
                <span className="widget-49-date-month">{date.split(' ')[1]}</span>
              </div>
              <div className="widget-49-meeting-info">
                <span className="widget-49-pro-title">{title}</span>
                <span className="widget-49-meeting-time">{time}</span>
              </div>
            </div>
            <ol className="widget-49-meeting-points">
              {points.map((point, index) => (
                <li key={index} className="widget-49-meeting-item"><span>{point}</span></li>
              ))}
            </ol>
            <div className="widget-49-meeting-action">
              <Button href="#" className="btn btn-sm btn-flash-border-primary">{buttonText}</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Events = () => {
  // Define an array of event card data
  const eventCards = [
    {
      date: '09 apr',
      title: 'PRO-08235 DeskOpe. Website',
      time: '12:00 to 13.30 Hrs',
      points: [
        'Expand module is removed',
        'Data migration is in scope',
        'Session timeout increased to 30 minutes',
      ],
      buttonText: 'View All',
    },
    {
      date: '13 apr',
      title: 'PRO-08235 Lexa Corp.',
      time: '12:00 to 13.30 Hrs',
      points: [
        'Scheming module is removed',
        'App design contract confirmed',
        'Client request to send invoice',
      ],
      buttonText: 'View All',
    },
    {
      date: '22 apr',
      title: 'PRO-027865 Opera module',
      time: '12:00 to 13.30 Hrs',
      points: [
        'Scope is revised and updated',
        'Time-line has been changed',
        'Received approval to start wire-frame',
      ],
      buttonText: 'View All',
    },
  ];

  return (
    <Container>
      <Row className="mt-5">
        {eventCards.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </Row>
    </Container>
  );
};

export default Events;
