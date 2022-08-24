import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import HostPage from './pages/HostPage/HostPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home/host" element={<HostPage />} />
    </Routes>
  );
}

export default App;
