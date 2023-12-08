import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { doctorData } from "../helpers/Data"
import { Container, Row, Col } from 'react-bootstrap';
import AppointmentList from './AppointmentList';


const Doctors = () => {
    const [show, setShow] = useState(false);
  const handleShowModal = () =>{
    setShow(true)

  }
  return (
    <Container>
        <AppointmentList show={show}/>
      <Row>
        {doctorData.map((doc) => (
          <Col xs={12} md={4} onClick={handleShowModal}>
            <Card className='m-3' >
              <Card.Img variant="top" src={doc.img} />
              <Card.Body>
                <Card.Title>{doc.name}</Card.Title>
                <Card.Text>
                  {doc.dep}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Doctors