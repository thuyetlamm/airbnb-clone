import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CalendarComp from '~/components/Calendar/Calendar';
import DefaultHeader from './components/DefaultHeader/DefaultHeader';
import DetailHeader from './components/DetailHeader/DetailHeader';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header(props) {
  const [showDetailHeader, setShowDetailHeader] = useState({});
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [idActive, setIdActive] = useState(1);
  const searchRef = useRef();

  useEffect(() => {
    const timeIds = setTimeout(() => {
      window.onscroll = () => {
        setShowDetailHeader({
          ...showDetailHeader,
          isActive: false,
        });
      };
    }, 1000);
    return () => clearTimeout(timeIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDetailHeader.isActive]);

  const hanldeShowDetailHeader = (values) => {
    setShowDetailHeader(values);
  };
  const handleChangeCalendar = (values) => {
    if (values[1]) {
      setEndDate(values[1]);
    } else {
      setStartDate(values[0]);
    }
    if (!values[0]) {
      setStartDate(values[1]);
      setEndDate(null);
    }
    if (values[0] && values[1]) {
      setStartDate(values[0]);
      setEndDate(values[1]);
    }
  };

  const handleGetIdActive = (id) => {
    setIdActive(id);
  };
  const handleClearDate = () => {
    setStartDate('');
    setEndDate('');
  };
  const handleClickOverlay = () => {
    setShowDetailHeader({
      ...showDetailHeader,
      isActive: false,
    });
    setIdActive(showDetailHeader.id);
  };
  return (
    <div className={cx('header')}>
      <div className={cx('container')}>
        <div
          className={cx('header-container')}
          ref={searchRef}
          style={
            !showDetailHeader.isActive
              ? {
                  height: '80px',
                  alignItems: 'center',
                }
              : { height: '160px', alignItems: 'flex-start', marginTop: '24px' }
          }
        >
          <Link to="/">
            <div className={cx('logo-header')}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
                alt="logo"
                className={cx('logo-icon')}
              />
              <span className={cx('logo-title')}>airbnb</span>
            </div>
          </Link>
          <div
            className={cx({
              'header-default': !showDetailHeader.isActive,
              'header-detail': showDetailHeader.isActive,
            })}
          >
            {!showDetailHeader.isActive ? (
              <DefaultHeader hanldeShowDetailHeader={hanldeShowDetailHeader} />
            ) : (
              <>
                <DetailHeader
                  indexActive={showDetailHeader.id}
                  startDate={startDate}
                  endDate={endDate}
                  handleGetIdActive={handleGetIdActive}
                  handleClearDate={handleClearDate}
                />
                <CalendarComp
                  isShowCalendar={[2, 4].some((x) => x === idActive)}
                  handleChangeCalendar={handleChangeCalendar}
                />
              </>
            )}
          </div>
          <div className={cx('header-options')}>
            <Link to="/home/hosts">
              <span className={cx('header-options-host')}>
                Trở thành chủ nhà
              </span>
            </Link>
            <div className={cx('header-options-switch')}>
              <ion-icon name="earth-outline"></ion-icon>
            </div>
            <div className={cx('header-options-login')}>
              <ion-icon name="reorder-three-outline"></ion-icon>
              <img
                src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                alt="avatar"
                className={cx('header-user-avatar')}
              />
            </div>
          </div>
        </div>
        <div
          className={cx({
            overlay: showDetailHeader.isActive,
          })}
          onClick={handleClickOverlay}
        ></div>
      </div>
    </div>
  );
}

export default Header;
