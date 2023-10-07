import React from 'react'
import LoginForm from '../components/LoginForm'
import Header from '../components/header'
import WithoutLoginHeader from '../components/WithoutLoginHeader'

const LoginPage = () => {
  return (
    <>
      <WithoutLoginHeader />
      <LoginForm />
    </>
  )
}

export default LoginPage

/*
1. /patient-register POST
2. /patient-login POST
3. /patient-profile GET protected
4. /doctor-profile GET protected
5. /doctor-profile PUT protected
6. /patient-profile PUT protected
7. /apptoiment POST protected
8. /appointment GET ALL protected
 ?userId=""?doctorId=""?statue="done"
*/