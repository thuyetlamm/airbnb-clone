import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Header from '~/components/Header/Header';
import NavigationBar from '~/components/NavigationBar/NavigationBar';
import PlacesList from '~/components/PlacesList/PlacesList';
import styles from './HomePage.module.scss';
import Footer from '~/components/Footer/Footer';
import MapBox from '~/components/MapBox/MapBox';

const cx = classNames.bind(styles);
HomePage.propTypes = {};

function HomePage(props) {
  const [isChangeView, setChangeView] = useState(true);
  const handleChangeView = () => {
    setChangeView((changeView) => !changeView);
  };
  return (
    <div
      className={cx('wrapper', {
        subWrapper: !isChangeView,
      })}
    >
      <Header />
      <div className={cx('content-container')}>
        <NavigationBar isChangeView={isChangeView} />
        {isChangeView ? <PlacesList /> : <MapBox />}
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
