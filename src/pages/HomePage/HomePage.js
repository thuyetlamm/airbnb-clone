import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import Header from '~/components/Header/Header';
import NavigationBar from '~/components/NavigationBar/NavigationBar';
import PlacesList from '~/components/PlacesList/PlacesList';
import styles from './HomePage.module.scss';
import Footer from '~/components/Footer/Footer';
import MapBox from '~/components/MapBox/MapBox';
import placeListApi from '~/api/placeListApi';

const cx = classNames.bind(styles);
HomePage.propTypes = {};

function HomePage(props) {
  const [isChangeView, setChangeView] = useState(true);
  const [loadingPlaceList, setLoadingPlaceList] = useState(true);
  const [placeList, setPlaceList] = useState([]);
  const [filters, setFilters] = useState({
    populate: '*',
    pagination: {
      page: 1,
      pageSize: 20,
    },
    filters: {
      categoryIds: {
        $in: 1,
      },
    },
  });

  const handleChangeView = () => {
    setChangeView((changeView) => !changeView);
  };

  useEffect(() => {
    (async () => {
      try {
        const list = await placeListApi.getAll(filters);
        console.log('re-call', filters);
        setPlaceList(list);
      } catch (error) {
        throw new Error(error);
      }
      setLoadingPlaceList(false);
    })();
  }, [filters]);

  const handleChangeTabCategory = (newCategoryIds) => {
    console.log(newCategoryIds);
    setFilters((prevFilter) => ({
      ...prevFilter,
      filters: {
        categoryIds: {
          $in: newCategoryIds,
        },
      },
    }));
  };
  return (
    <div
      className={cx('wrapper', {
        subWrapper: !isChangeView,
      })}
    >
      <Header />
      <div className={cx('content-container')}>
        <NavigationBar
          isChangeView={isChangeView}
          filters={filters}
          onChange={handleChangeTabCategory}
        />
        {isChangeView ? (
          <PlacesList
            loadingPlaceList={loadingPlaceList}
            placeList={placeList}
          />
        ) : (
          <MapBox />
        )}
      </div>
      {isChangeView ? (
        <>
          <Footer />{' '}
          <button
            className={cx('footer-switch-btn')}
            onClick={handleChangeView}
          >
            <span>Hiện bản đồ</span>
            <span>
              <ion-icon name="map-outline"></ion-icon>
            </span>
          </button>{' '}
        </>
      ) : (
        <button className={cx('footer-switch-btn')} onClick={handleChangeView}>
          <span>Hiển thị danh sách</span>
          <span>
            <ion-icon name="list-outline"></ion-icon>
          </span>
        </button>
      )}
    </div>
  );
}

export default HomePage;
