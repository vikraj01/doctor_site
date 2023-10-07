import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

//Create Privateroutes.jsx
const PrivateRoute = ({ role }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  if(user && user?.role == role) return <Outlet/>

  if(user?.role=='doctor') return <Navigate to='/doctor/'/>
  if(user?.role=='patient') return <Navigate to='/patient/'/>
  localStorage.clear();
  return <Navigate to='/'/>
}
 
export default PrivateRoute
