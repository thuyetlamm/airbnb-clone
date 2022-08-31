import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import Header from '~/components/Header/Header';
import NavigationBar from '~/components/NavigationBar/NavigationBar';
import PlacesList from '~/components/PlacesList/PlacesList';
import styles from './HomePage.module.scss';
import Footer from '~/components/Footer/Footer';
import MapBox from '~/components/MapBox/MapBox';
import placeListApi from '~/api/placeListApi';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const qs = require('qs');

const cx = classNames.bind(styles);
HomePage.propTypes = {};

function HomePage() {
  const [isChangeView, setChangeView] = useState(true);
  const [loadingPlaceList, setLoadingPlaceList] = useState(true);
  const [placeList, setPlaceList] = useState([]);
  const navigation = useNavigate();
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
        setPlaceList(list);
      } catch (error) {
        throw new Error(error);
      }
      setLoadingPlaceList(false);
    })();
  }, [filters]);

  const handleChangeTabCategory = (newCategoryIds) => {
    const newFilters = {
      ...filters,
      filters: {
        categoryIds: {
          $in: newCategoryIds,
        },
      },
    };
    setFilters(newFilters);
    navigation(`/placelists/?${qs.stringify(newFilters)}`);
  };
  const handleClickPlaceItem = (newPlaceIds) => {
    localStorage.setItem('place_id', JSON.stringify(newPlaceIds));
  };
  return (
    <div
      className={cx('wrapper', {
        subWrapper: !isChangeView,
      })}
    >
      <Helmet>
        <title>Nhà nghỉ dưỡng & Căn hộ cao cấp cho thuê - Airbnb </title>
      </Helmet>
      <Header />
      <div className={cx('content-container')}>
        <NavigationBar
          isChangeView={isChangeView}
          onChange={handleChangeTabCategory}
        />
        {isChangeView ? (
          <PlacesList
            loadingPlaceList={loadingPlaceList}
            placeList={placeList}
            onChange={handleClickPlaceItem}
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
