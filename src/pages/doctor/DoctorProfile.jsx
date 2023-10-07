import React, { useEffect, useState } from 'react';
import DoctorHeader from '../../components/Doctor/DoctorHeader';
import { getDoctorProfile } from '../../api/api';
import Profile from '../../components/Profile';
import Spinner from 'react-bootstrap/Spinner'; // Import the Bootstrap Spinner component

const DoctorProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      console.log('fetching...');

      try {
        const response = await getDoctorProfile(); // Use getDoctorProfile instead of getPatientProfile
        console.log('response', response);
        setProfile(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError(error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      <DoctorHeader />
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

export default DoctorProfile;
