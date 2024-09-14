import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AppLayout from "./layout/AppLayout";
import ActivityDetailPage from "./pages/ActivityDetailPage/ActivityDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import HotelPage from "./pages/HotelPage/HotelPage";
import AboutPage from "./pages/About/AboutPage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage";
import HotelDetailPage from "./pages/HotelDetailPage/HotelDetailPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HotelBookPage from "./pages/HotelBookPage/HotelBookPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='activities'>
          <Route index element={<ActivityPage />} />
          <Route path=':id' element={<ActivityDetailPage />} />
        </Route>
        <Route path='hotels'>
          <Route index element={<HotelPage />} />
<<<<<<< HEAD
          <Route path=':id' element={<HotelDetailPage />} />
        </Route>
        <Route path='login' element={<LoginPage />} />
=======
          <Route path=":id" element={<HotelDetailPage />} />
          <Route path=":id/reserve" element={<HotelBookPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
>>>>>>> develop
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
