import AppointmentFormPage from './pages/AppointmentFormPage'
import PatientDashboard from './pages/PatientDashboard'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import AppointmentListingPage from './pages/AppointmentListingPage'
import AppointmentHistoryPage from './pages/AppointmentHistoryPage'
import PrivateRoute from './utils/PrivateRoute'
import DoctorLoginPage from './pages/doctor/DoctorLoginPage'
import DoctorAppointmentListing from './pages/doctor/DoctorAppointmentListingPage'
import DoctorProfile from './pages/doctor/DoctorProfile'
import VisitPage from './pages/VisitPage'
import Cards from './pages/TestPage'
import ErrorPage from './pages/ErrorPage'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<VisitPage />} />
        <Route path='/patient-register' element={<RegisterPage />} />
        <Route path='/patient-login' element={<LoginPage />} />
        <Route path='/doctor-login' element={<DoctorLoginPage />} />
        <Route path='/test' element={<Cards />} />
        <Route element={<PrivateRoute role='patient' />}>
          <Route path='patient/profile' element={<ProfilePage />} />
          <Route
            path='patient/appointment-form/:doctorId'
            element={<AppointmentFormPage />}
          />
          <Route
            path='patient/appointments-history'
            element={<AppointmentHistoryPage />}
          />
          <Route
            path='patient/appointments'
            element={<AppointmentListingPage />}
          />
          <Route path='patient/' element={<PatientDashboard />} />
        </Route>

        <Route element={<PrivateRoute role='doctor' />}>
          <Route path='doctor/' element={<DoctorAppointmentListing />} />
          <Route path='doctor/profile' element={<DoctorProfile />} />
        </Route>

        <Route path="*" element={<ErrorPage/>}/> 
      </Routes>
    </>
  )
}

export default App
