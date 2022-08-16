import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import Header from '~/components/Header/Header';
import NavigationBar from '~/components/NavigationBar/NavigationBar';
import PlacesList from '~/components/PlacesList/PlacesList';
import styles from './HomePage.module.scss';
import Skeleton from '@mui/material/Skeleton';

const cx = classNames.bind(styles);
HomePage.propTypes = {};

function HomePage(props) {
  const [loadingFooter, setloadingFooter] = useState(true);
  useEffect(() => {
    const timeIds = setInterval(() => {
      setloadingFooter(false);
    }, [1200]);
    return () => {
      clearInterval(timeIds);
    };
  }, []);
  return (
    <>
      <Header />
      <div className={cx('content-container')}>
        <NavigationBar />
        <PlacesList />
      </div>
      <button className={cx('footer-switch-btn')}>
        <span>Hiện bản đồ</span>
        <span>
          <ion-icon name="map-outline"></ion-icon>
        </span>
      </button>
      {!loadingFooter && (
        <div className={cx('footer')}>
          <div className={cx('footer-container')}>
            <div className={cx('footer-left')}>
              <span>© 2022 Airbnb, Inc.</span>
              <ul className={cx('footer-policy')}>
                <li>Quyền riềng tư</li>
                <li>Điều khoản</li>
                <li>Sơ đồ trang web</li>
              </ul>
            </div>
            <div className={cx('footer-right')}>
              <button
                type="button"
                className={cx('footer-btn-languages', 'btn')}
              >
                <span>
                  <ion-icon name="earth-outline"></ion-icon>
                </span>
                <span>Tiếng Việt (VN)</span>
              </button>
              <button type="button" className={cx('footer-btn-money', 'btn')}>
                <span>$</span>
                <span>USD</span>
              </button>
              <button type="button" className={cx('footer-btn-help', 'btn')}>
                <span>Hỗ trợ tài nguyên</span>
                <span>
                  <ion-icon name="chevron-up-outline"></ion-icon>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
      {loadingFooter && (
        <div className={cx('footer')}>
          <div className={cx('footer-container')}>
            <div className={cx('footer-left')}>
              <Skeleton height={28} width="460px" />
            </div>
            <div className={cx('footer-right')}>
              <Skeleton height={28} width="380px" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
