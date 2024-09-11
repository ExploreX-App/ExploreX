import DatePicker, { DateObject} from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"
import React, { useState} from 'react'



const CalendarPicker = () => {
  const [values, setValues] = useState([
  new DateObject().subtract(4, "days"),
  new DateObject().add(4, "days")
])
  return (
    <div>
      <DatePicker
  value={values}
  onChange={setValues}
        range
        numberOfMonths={2}
/>
    </div>
  )
}

export default CalendarPicker
