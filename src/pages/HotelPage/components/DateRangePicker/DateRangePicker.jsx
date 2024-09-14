import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateRangePicker.style.css"

const DateRangePicker = ({startDate, setStartDate, endDate, setEndDate}) => {
  

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
        <DatePicker
        selected={startDate}
        onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        monthsShown={2}
        placeholderText="Checkin - Checkout"
        dateFormat="yyyy-MM-dd"
        customInput={<input className="datapicker-input" />}
        />
  </div>
  )
};
export default DateRangePicker;