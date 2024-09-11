import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AppLayout from "./layout/AppLayout";
import ActivityDetailPage from "./pages/ActivityDetailPage/ActivityDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import HotelPage from "./pages/HotelPage/HotelPage";
import AboutPage from "./pages/About/AboutPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="activities">
            <Route index element={<ActivityPage />} />
            <Route path=":id" element={<ActivityDetailPage />} />
          </Route>
          <Route path="hotels" element={<HotelPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
