import React, { useEffect, useState } from 'react';
import AppointmentListing from '../components/AppointementHistory/AppointmentListing';
import { getAllAppointments } from '../api/api';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../components/Header';

const AppointmentHistoryPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      let id = user.data._id;

      console.log('fetching...');
      try {
        const response = await getAllAppointments({ id, status: true });
        console.log('response', response);
        setAppointments(response.data.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error occurred:', error.message);
        setError(error); 
        setLoading(false); 
      }
    };

    getData();
  }, [navigate]);

  return (
    <>
      <Header />
      {loading ? (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Spinner animation="border" role="status" style={{ width: '5rem', height: '5rem' }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <AppointmentListing appointments={appointments} test='Hello' />
      )}
    </>
  );
};

export default AppointmentHistoryPage;
