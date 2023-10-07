import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import DoctorListing from '../components/DoctorListing';
import { getAllDoctors } from '../api/api.js';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'; // Import the Bootstrap Spinner component

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
        setLoading(false); // Data is loaded
      } catch (error) {
        console.error('Error occurred:', error.message);
        setError(error); // Set the error state
        setLoading(false); // Loading is complete, but with an error
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
