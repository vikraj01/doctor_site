import React, { useEffect } from 'react'
import WithoutLoginHeader from '../components/WithoutLoginHeader'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const VisitPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      if (user.role == 'patient') navigate('/patient/')
      else if (user.role == 'doctor') navigate('/doctor')
      localStorage.clear()
      navigate('/')
    }
  }, [])

  return (
    <>
      <WithoutLoginHeader />
      <div className='text-center mt-5'>
        <h1>Welcome to the Appointment System</h1>
        <p>Choose an option below:</p>
        <div className='d-flex justify-content-center'>
          <div className='m-2'>
            <Link to='/patient-login' className='btn btn-primary'>
              Login as Patient
            </Link>
          </div>
          <div className='m-2'>
            <Link to='/patient-register' className='btn btn-success'>
              Register as Patient
            </Link>
          </div>
          <div className='m-2'>
            <Link to='/doctor-login' className='btn btn-info'>
              Login as Doctor
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default VisitPage
