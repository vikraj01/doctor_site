import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import Header from '../components/header';
import { getPatientProfile } from '../api/api';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'; // Import the Bootstrap Spinner component

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      console.log('fetching...');

      try {
        const response = await getPatientProfile();
        console.log('response', response);
        setProfile(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError(error);
        setLoading(false);
        navigate('/error');
      }
    };

    getData();
  }, [navigate]);

  return (
    <>
      <Header />
      {loading ? (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <Profile profile={profile} />
      )}
    </>
  );
};

export default ProfilePage;
