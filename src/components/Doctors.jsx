import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { doctorData } from "../helpers/Data"
import { Container, Row, Col } from 'react-bootstrap';
import AddModal from './AddModal';



const Doctors = () => {
  const [show, setShow] = useState(false);

  const showModal = (doctorName) => {
    console.log(doctorName);
    setShow(true)
  }
  return (
    <Container>
      <AddModal show={show} setShow={setShow}/>
      <Row className='justify-content-center'>
        {doctorData.map((doc) => (
          <Col xs={12} md={4} onClick={()=>showModal(doc.name)}>
            <Card className='m-3' >
              <Card.Img variant="top" src={doc.img} />
              <Card.Body >
                <Card.Title className='text-center'>{doc.name}</Card.Title>
                <Card.Text className='text-center'>
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