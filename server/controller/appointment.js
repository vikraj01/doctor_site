const { default: mongoose } = require('mongoose')
const Appointment = require('../model/appointment.model')

const getAppointment = async (req, res, next) => {
  const { id, status } = req.query;
  const role = req.headers?.role;

  const query = {};

  if (role === 'patient') query.patientId = id;
  else if (role === 'doctor') query.doctorId = id;
  if (status == 'false') query.status = false;
  else if (status == 'true') query.status = true;

  console.log(query);
  try {
    
    const results = await Appointment.find(query)
      .populate('patientId', 'name email') 
      .populate('doctorId', 'name email'); 

    console.log(results);
    res.status(200).json({ data: results }); 
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: error.message }); 
  }
};


const postAppointment = async (req, res, next) => {
  const { user, patient, age, address, symptoms, doctorId, patientId } =
    req.body
  console.log(req.body)
  try {
    const appointment = await Appointment.create({
      user,
      patient,
      age,
      address,
      symptoms,
      doctorId,
      patientId
    })
    res.status(201).json({ appointment }) 
  } catch (error) {
    res.status(500).json({ message: error.message }) 
  }
}

const updateAppointment = async (req, res, next) => {
  const { id, status } = req.body
  try {
    const appointment = await Appointment.findByIdAndUpdate(id, {
      status
    })
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' }) 
    }
    res.status(200).json({ data: appointment }) 
  } catch (error) {
    res.status(500).json({ message: error.message }) 
  }
}

module.exports = { getAppointment, postAppointment, updateAppointment }
