import React from 'react'
import RegisterForm from '../components/RegisterForm'
import Header from '../components/header'
import WithoutLoginHeader from '../components/WithoutLoginHeader'

const RegisterPage = () => {
  return (
    <>
      <WithoutLoginHeader />
      <RegisterForm />
    </>
  )
}

export default RegisterPage
