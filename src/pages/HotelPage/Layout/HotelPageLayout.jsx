import React, {useEffect, useState, useRef} from "react";
import DateRangePicker from "../components/DateRangePicker/DateRangePicker";
import './HotelPageLayout.style.css'

const HotelPageLayout = ({setKeywordQuery}) => {
    
    const [travelTo, setTravelTo] = useState('')
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const [adults, setAdults] = useState(2); 
  const [children, setChildren] = useState(0); 
  const [rooms, setRooms] = useState(1);
  
  const [personAndRooms, setPersonAndRooms] = useState({
    adults: adults,
    children: children,
    rooms: rooms
  })

  const dropdownRef = useRef(null);

  // 성인 수 변경 함수
  const increaseAdults = () => setAdults(adults + 1);
  const decreaseAdults = () => adults > 1 && setAdults(adults - 1);

  // 아이 수 변경 함수
  const increaseChildren = () => setChildren(children + 1);
  const decreaseChildren = () => children > 0 && setChildren(children - 1);

  // 방 수 변경 함수
  const increaseRooms = () => setRooms(rooms + 1);
  const decreaseRooms = () => rooms > 1 && setRooms(rooms - 1);


  const openDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // 드롭다운 외부 클릭 감지 (드롭다운 닫기)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // 외부 클릭 시 드롭다운 닫기
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleOnClickPersonAndRooms = () => {
    setPersonAndRooms({
      ...personAndRooms,
      adults: adults,
      children: children,
      rooms: rooms
    })
    setIsDropdownOpen(false)
  }

  const formatDate = (date) => {
    if (!date) return "";
    return date.toISOString().split('T')[0]; // YYYY-MM-DD 부분만 추출
  };


  let dateFrom;
  let dateTo;
  if (startDate) {
    dateFrom = formatDate(startDate);
  }
  if (endDate) {
    dateTo = formatDate(endDate);
  }


  const searchHotels = () => {
    setKeywordQuery ({
      keyword: travelTo,
      dateFrom: dateFrom,
      dateTo: dateTo,
      adultNum: adults
    })

    setTravelTo('')
    setStartDate(null);
    setEndDate(null)
  }



    return(
        <>

            <div className="hotel-page-form">
                    <form>
                        <input 
                        className="input-travelTo" 
                        type="text" 
                        placeholder="Where to go?" 
                        name="travelTo" 
                        value={travelTo} 
                        onChange={(e)=> {setTravelTo(e.target.value)}}/>
                        <DateRangePicker startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
                        <div style={{ position: "relative", display: "inline-block" }}>
                            <input 
                            className="dropdown-button"
                            type="text"
                            placeholder="Select guest and room(s)"
                            value={`${adults} Adults · ${children} children · ${rooms} rooms`}
                            onClick={openDropdown}
                            readOnly
                            />

                            {isDropdownOpen && (
                                <div
                                ref={dropdownRef}
                                className="guest-room-selector"
                                >
                                    <div className="row">
                                        <label>Adults</label>
                                            <div className="counter-buttons">
                                                <button type="button" onClick={decreaseAdults}>-</button>
                                                <span>{adults}</span>
                                            <button type="button" onClick={increaseAdults}>+</button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <label>Child</label>
                                            <div className="counter-buttons">
                                                <button type="button" onClick={decreaseChildren}>-</button>
                                                <span>{children}</span>
                                            <button type="button" onClick={increaseChildren}>+</button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <label>Room(s)</label>
                                            <div className="counter-buttons">
                                                <button type="button" onClick={decreaseRooms}>-</button>
                                                <span>{rooms}</span>
                                            <button type="button" onClick={increaseRooms}>+</button>
                                        </div>
                                    </div>

                                    <button type="button" style={{ marginTop: "10px" }} onClick={handleOnClickPersonAndRooms}>
                                    Complete
                                    </button> 
                                </div>
                            )}
                        </div>
                    <button type="button" className="search-button" onClick={searchHotels}>Search</button>
                    </form>        
            </div>
        
        </>
    )

}

export default HotelPageLayout