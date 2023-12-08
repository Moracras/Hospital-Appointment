import React from 'react'
import Card from 'react-bootstrap/Card';
import { doctorData } from "../helpers/Data"
import { Container, Row, Col } from 'react-bootstrap';


const Doctors = () => {
  console.log(doctorData);
  return (
    <Container>
      <Row>
        {doctorData.map((doc) => (
          <Col xs={12} md={4}>
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