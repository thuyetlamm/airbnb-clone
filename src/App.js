import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import HostPage from './pages/HostPage/HostPage';
import DetailPlacePage from './pages/DetailsPlace/DetailPlacePage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/placelists/*" element={<HomePage />} />
      <Route path="/home/hosts" element={<HostPage />} />
      <Route path="/rooms/:id/" element={<DetailPlacePage />} />
    </Routes>
  );
}

export default App;
