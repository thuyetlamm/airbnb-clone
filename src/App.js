import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import HostPage from './pages/HostPage/HostPage';
import { lazy, Suspense } from 'react';
import DetailPlacePageSkeleton from '~/pages/DetailsPlace/component/DetailPlacePageSkeleton';
import BookingConfirm from './pages/DetailsPlace/component/BookingConfirm/BookingConfirm';
import { router } from './routes';
const DetailPlacePage = lazy(() =>
  import('./pages/DetailsPlace/DetailPlacePage')
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={`${router.placelist}/*`} element={<HomePage />} />
      <Route path="/home/hosts" element={<HostPage />} />
      <Route
        path={`${router.room}/:id/`}
        element={
          <Suspense fallback={<DetailPlacePageSkeleton />}>
            <DetailPlacePage />
          </Suspense>
        }
      />
      <Route path={`${router.booking}/:id/`} element={<BookingConfirm />} />
    </Routes>
  );
}

export default App;
