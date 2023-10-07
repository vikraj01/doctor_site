import axios from 'axios'

const baseURL = 'http://localhost:4500'

const { token, role } = JSON.parse(localStorage.getItem('user'))
const headers = {
  token,
  role
}

const api = axios.create({
  baseURL,
  headers
})

export const patientRegister = data => {
  return api.post('/user-register', data)
}

export const doctorLogin = data => {
  return api.post('/doctor-login', data)
}

export const patientLogin = data => {
  return api.post('/user-login', data)
}

export const getPatientProfile = () => {
  return api.get('/user-profile')
}

export const getDoctorProfile = () => {
  return api.get('/doctor-profile')
}

export const updateDoctorProfile = data => {
  return api.put('/doctor-profile', data)
}

export const updatePatientProfile = data => {
  console.log(data)
  return api.put('/update-user', data)
}

export const createAppointment = data => {
  return api.post('/appointment', data)
}

export const getAllAppointments = ({ id, status = false }) => {
  return api.get('/appointments', {
    params: {
      id,
      status
    }
  })
}

export const getAllDoctors = () => {
  return api.get('/doctors')
}
