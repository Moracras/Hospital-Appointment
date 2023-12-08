import React from 'react'
import Doctors from '../components/Doctors'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
        <h1>Barts Hospital</h1>
        <h3>Our Doctors</h3>
        <Doctors/>
    </div>
  )
}

export default Home