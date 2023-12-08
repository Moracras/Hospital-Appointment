import React, { useState } from 'react'
import {appointmentData} from "../helpers/Data"

const AppointmentList = () => {
  const [applist, setapplist] = useState(appointmentData)
  return (
    <div>
      {applist.map((app)=>(
        <div>
          {console.log(app.day)}
          <div>
            <h3>{app.patient}</h3>
            <h4>{app.doctor}</h4>
          </div>
          <div>
            <p>Date: {app.day.toLocaleDateString()}</p>
            <p>Time : {app.day.toLocaleTimeString()}</p>
          </div>
          <button>DEL</button>
        </div>
      ))}
    </div>
  )
}

export default AppointmentList