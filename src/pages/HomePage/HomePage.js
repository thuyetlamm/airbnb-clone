import classNames from 'classnames/bind';
import React, { useCallback, useEffect, useState } from 'react';
import Header from '~/components/Header/Header';
import NavigationBar from '~/components/NavigationBar/NavigationBar';
import PlacesList from '~/components/PlacesList/PlacesList';
import styles from './HomePage.module.scss';
import Footer from '~/components/Footer/Footer';
import MapBox from '~/components/MapBox/MapBox';
import placeListApi from '~/api/placeListApi';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import FilterPage from '~/components/FilterPageOnMobile/FilterPage';
import { toggleShowFilterPage } from '~/common/globalSlice';
import { totalCount } from '~/components/features/Counter/counterSlice';
const qs = require('qs');

const cx = classNames.bind(styles);
HomePage.propTypes = {};

function HomePage() {
  const [isChangeView, setChangeView] = useState(true);
  const [loadingPlaceList, setLoadingPlaceList] = useState(true);
  const [placeList, setPlaceList] = useState([]);
  const counter = useSelector((state) => state.counter);
  const isShowFilterPage = useSelector(
    (state) => state.globalState.isShowFilterPage
  );
  const globalState = useSelector((state) => state.globalState);
  const navigation = useNavigate();
  const dispatch = useDispatch();
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

      capacityOfPlace: {
        $gte: 2,
      },
      country: {
        $notContainsi: 'hehe',
      },
    },
  });

  const handleChangeView = () => {
    setChangeView((changeView) => !changeView);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoadingPlaceList(true);
        const list = await placeListApi.getAll(filters);

        setPlaceList(list);
      } catch (error) {
        throw new Error(error);
      }
      setLoadingPlaceList(false);
    })();
  }, [filters]);

  const handleChangeTabCategory = useCallback(
    (newCategoryIds) => {
      const newFilters = {
        ...filters,
        filters: {
          ...filters.filters,
          categoryIds: {
            $in: newCategoryIds,
          },
        },
      };
      setFilters(newFilters);
      navigation(`/placelists/?${qs.stringify(newFilters)}`);
    },
    [filters]
  );
  const handleClickPlaceItem = (newPlaceIds) => {
    localStorage.setItem('place_id', JSON.stringify(newPlaceIds));
  };
  const handleClickBtnSearch = useCallback(() => {
    const total = counter.countBig + counter.countMid;
    dispatch(toggleShowFilterPage(false));
    const newFilters = {
      ...filters,
      filters: {
        ...filters.filters,
        capacityOfPlace: {
          $gte: total,
        },
        country: {
          $notContainsi: globalState.filterCollection.place || 'place',
        },
      },
    };
    setFilters(newFilters);
    navigation(`/placelists/?${qs.stringify(newFilters)}`);
  }, [
    filters,
    counter.countBig,
    counter.countMid,
    globalState.filterCollection.place,
  ]);

  return (
    <div
      className={cx('wrapper', {
        subWrapper: !isChangeView,
      })}
    >
      <Helmet>
        <title>Nhà nghỉ dưỡng & Căn hộ cao cấp cho thuê - Airbnb </title>
      </Helmet>
      <>
        <Header handleClickBtnSearch={handleClickBtnSearch} />
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
            <MapBox placeList={placeList} />
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
          <button
            className={cx('footer-switch-btn')}
            onClick={handleChangeView}
          >
            <span>Hiển thị danh sách</span>
            <span>
              <ion-icon name="list-outline"></ion-icon>
            </span>
          </button>
        )}
      </>
      {isShowFilterPage && (
        <FilterPage handleClickBtnSearch={handleClickBtnSearch} />
      )}
    </div>
  );
}

export default HomePage;
