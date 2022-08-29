import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import HostPage from './pages/HostPage/HostPage';
import DetailPlace from './pages/DetailsPlace/DetailPlace';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/placelists/*" element={<HomePage />} />
      <Route path="/home/host" element={<HostPage />} />
      <Route path="/rooms/*" element={<DetailPlace />} />
    </Routes>
  );
}

export default App;
