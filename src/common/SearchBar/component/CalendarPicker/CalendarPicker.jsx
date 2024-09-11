import React, { useState,useEffect } from 'react'
import DatePicker, { DateObject } from "react-multi-date-picker"
import "./CalendarPicker.style.css"



const CalendarPicker = ({ onDateChange }) => {
  const [values, setValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(4, "days")
  ]);

  useEffect(() => {
    if (values.length === 2) {
      const dateFrom = values[0].format("YYYY-MM-DD");
      const dateTo = values[1].format("YYYY-MM-DD");
      onDateChange({dateFrom, dateTo});
    }
  }, [values, onDateChange]);

  return (
    <div>
      <DatePicker className='picker-container'
        value={values}
        onChange={setValues}
        range
        numberOfMonths={2}
      />
    </div>
  )
}

export default CalendarPicker
