import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AppLayout from './layout/AppLayout';
import ActivityDetailPage from './pages/ActivityDetailPage/ActivityDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ActivityPage from './pages/ActivityPage/ActivityPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path='activities'>
          <Route index element={<ActivityPage />} />
          <Route path=':id' element={<ActivityDetailPage />} />
        </Route>
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
