# ExploreX

ExploreX is a travel booking and activity management platform built using React. This project was developed by a team of five as a group project. The application integrates multiple APIs to provide users with seamless hotel searches, activity browsing, and personalized trip management, all in one place.
![ExploreX Demo](./src/assets/demo.gif)

## Demo

> https://explorex-9.netlify.app/

## Features

- **User Authentication**: User login is handled by saving session data in local storage.
- **Hotel Search**: 
  - Search for hotels based on location with sorting and pagination.
  - Hotel sorting options include:
    - Top picks for long stays
    - Price (Lowest First)
    - Distance from City Centre
    - Best Reviewed First
    - Property rating (5 to 0)
    - Entire homes & apartments first
  - View detailed hotel information, including user reviews, photos, nearby hotel information, and hotel amenities.
  - Select a room from available options.
- **Room Selection & Booking**: 
  - After selecting a room, users are redirected to the booking page.
  - Input user details and payment information on the booking page.
  - Stripe is used to build the payment section, although actual payments are not processed (the payment system is not fully implemented).
  - Reservations are saved in the "upcoming reservations" section of the user's profile.
- **Activity Search**: 
  - Explore activities at your destination, sortable by type and popularity, with pagination.
  - Favorite activities to save them to your profile for later reference.
- **Hotel Booking Management**: Users can book hotels, and their reservations are saved in their profile under "upcoming reservations."
- **Activity Favoriting**: Users can mark activities as favorites, which are stored in their profile.

## APIs Used

- **Google Maps API**: 
  - Integrated for location search and auto-completing region names.
  - Map display for visualizing the search area.
- **Amadeus API**: 
  - Provides activity data, such as popular things to do in various regions.
- **Booking.com API**: 
  - Fetches hotel data, including availability, pricing, amenities, and additional details for each hotel.
- **Stripe API**: 
  - Used to create the payment section in the booking flow (no actual payment processing).

## Technologies

- **Frontend**: 
  - React.
  - Bootstrap for responsive design.
- **APIs**: Google Maps, Amadeus, Booking.com, Stripe.
- **Data Fetching and Caching**: React Query for efficient data fetching and caching.
- **UI Components**: React Bootstrap.

## Getting Started with ExploreX

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Environment Variables

To run the project locally, you'll need to set up the following environment variables by creating a `.env` file in the root directory and adding your own API keys:

```env
REACT_APP_AMADEUS_API_ID=your_amadeus_api_id
REACT_APP_AMADEUS_API_SECRET=your_amadeus_api_secret
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_HOTEL_API_KEY=your_hotel_api_key
```

### `npm install`

Installs all necessary dependencies.

### `npm build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

## How It Works

- **Login**: User session data is stored in local storage for managing authentication.
- **Hotel Search**: Users search for hotels by location. Results can be sorted by price, rating, distance, etc. Pagination allows users to easily browse through large sets of data.
- **Room Selection & Booking**: After selecting a hotel room, users are redirected to the booking page to input user and payment details (Stripe integration used for payment, but no actual transaction processing). Reservations are stored in the profile under "upcoming reservations."
- **Activity Search**: Users can explore activities by location, with similar sorting and pagination functionalities.
- **Profile**: Logged-in users can save hotel bookings and favorited activities to their profiles, which can be accessed at any time.

## Future Improvements

- **User Reviews**: Allow users to leave reviews for hotels and activities.
- **Complete Payment Integration**: Implement full payment processing through Stripe.
- **Wishlist Sharing**: Enable users to share their favorite activities and booked hotels with friends.

