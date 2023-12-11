import Container from "react-bootstrap/Container"
import {doctorData} from "../helpers/Data"
import { Row,Col } from "react-bootstrap"

const Doctors = () => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({id,img,dep,name})=>(
          <Col key={id}>
            <img src={img} alt={name} 
          className="img-thumbnail doctor-img" />
            <h5>{name}</h5>
            <h6>{dep}</h6>
            
          <Col/>

        ))}
      </Row>
    </Container>
  )
}

export default Doctors