import { useState } from "react";
import Doctors from '../components/Doctors'
import AppointmentList from '../components/AppointmentList'
import { appointmentData } from "../helpers/Data"

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors />
      <AppointmentList appointments={appointments} />
    </main>
  )
}

export default Home