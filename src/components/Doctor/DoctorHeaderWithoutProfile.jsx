import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const DoctorHeaderWithoutProfile = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5 p-4">
      <Container>
        <Navbar.Brand href="/">Doctor Appointments</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DoctorHeaderWithoutProfile;
