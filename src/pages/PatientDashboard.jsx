import React, { useEffect, useState } from 'react';
import DoctorListing from '../components/DoctorListing';
import { getAllDoctors } from '../api/api.js';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'; 
import Header from '../components/Header';

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllDoctors();
        setDoctors(response.data.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error occurred:', error.message);
        setError(error); 
        setLoading(false); 
      }
    };

    getData();
  }, []);

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
        <DoctorListing cardData={doctors} />
      )}
    </>
  );
};

export default Home;
