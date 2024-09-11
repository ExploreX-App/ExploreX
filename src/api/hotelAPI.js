import axios from 'axios';

const HOTEL_API_KEY = process.env.REACT_APP_HOTEL_API_KEY;

const hotelApi = axios.create({
    baseURL: "https://booking-com15.p.rapidapi.com/api/v1/hotels",
    headers: {
        'x-rapidapi-key': HOTEL_API_KEY,
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
      }
})

export default hotelApi;