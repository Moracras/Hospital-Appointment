import React from 'react'
import Doctors from '../components/Doctors'
import { Container } from 'react-bootstrap'
import AppointmentList from '../components/AppointmentList'

const Home = () => {
  return (
    <Container className='text-center'>
      <h1>Clarus Hospital</h1>
      <h3> Our Doctors</h3>
      <Doctors/>
      <AppointmentList/>
    </Container>
  )
}

export default Home