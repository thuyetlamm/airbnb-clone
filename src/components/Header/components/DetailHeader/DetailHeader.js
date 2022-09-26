import React, { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DetailHeader.module.scss';
import classNames from 'classnames/bind';
import SearchPlace from '../SearchPlace/SearchPlace';
import { useOnClickOutside } from '~/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveId, toggleShowCalendar } from '~/common/globalSlice';
import CountFeature from '../CountFeature/CountFeature';

const cx = classNames.bind(styles);
function DetailHeader({ handleClickBtnSearch }) {
  const indexActive = useSelector((state) => state.globalState.activeId);
  // const [activeSearch, setActiveSearch] = useState(indexActive);
  const [isActiveTab, setActiveTab] = useState(0);
  const searchInput = useRef();
  const dispatch = useDispatch();
  const ref = useRef();
  const navLinkArr = ['Chỗ ở', 'Trải nghiệm', 'Trải nghiệm trực tuyến'];
  const subNavLinkArr = [
    {
      id: 1,
      title: 'Địa điểm',
      subTitle: <SearchPlace />,
      styleForElement: {
        padding: '14px 28px',
        width: '326px',
      },
      titleFitler: null,
    },
    {
      id: 2,
      title: 'Nhận phòng',

      styleForElement: {
        padding: '18px 0 18px 24px',
      },
    },
    {
      id: 4,
      title: 'Trả phòng',
      styleForElement: {
        padding: '18px 0 18px  24px',
      },
    },
    {
      id: 3,
      title: 'Khách',
      subTitle: <CountFeature />,
      styleForElement: {
        padding: '18px 20px',
        width: '260px',
      },
      titleFitler: null,
    },
  ];

  // useOnClickOutside(ref, () => dispatch(setActiveId(null)));
  useEffect(() => {
    const searchRef = document.querySelectorAll(
      '.DetailHeader_header-search-list__Kp443'
    );
    let flag = false;
    searchRef.forEach((ele) => {
      if (flag) return;
      if (ele.classList.contains('DetailHeader_active-search__JzZZY')) {
        flag = true;
        return;
      }
    });
    if (flag) {
      searchInput.current.style.backgroundColor = 'rgba(0, 0, 0, 0.07)';
    } else {
      searchInput.current.style.backgroundColor = '#fff';
    }
  }, [indexActive]);
  const hanleActiveClick = (idx) => {
    setActiveTab(idx);
  };
  const handleClickSearchItem = (id) => {
    dispatch(setActiveId(id));
    if (id === 2 || id === 4) {
      dispatch(toggleShowCalendar(true));
    }
  };
  return (
    <div className={cx('header-detaill')}>
      <div className={cx('header-tabs')}>
        {navLinkArr.map((item, idx) => (
          <div
            className={cx('header-tab', {
              active: !!(isActiveTab === idx),
            })}
            onClick={() => hanleActiveClick(idx)}
            key={idx}
          >
            {idx === 2 ? (
              <Link to="/experiences">{item}</Link>
            ) : (
              <Link to="/">{item}</Link>
            )}
          </div>
        ))}
      </div>
      <div className={cx('wrap-search')} ref={ref}>
        <div className={cx('header-search')} ref={searchInput}>
          {subNavLinkArr.map((item, index) => (
            <div
              className={cx('header-search-list', {
                'active-search': item.id === indexActive,
              })}
              style={item?.styleForElement}
              key={item.id}
              onClick={() => handleClickSearchItem(item.id)}
            >
              <h1 className={cx('header-search-title')}>{item.title}</h1>
              <div className={cx('header-search-subTitle')}>
                {item?.subTitle}
              </div>
            </div>
          ))}
          <div
            className={cx('header-search-buttonn')}
            onClick={handleClickBtnSearch}
          >
            <span className={cx('header-search-icon')}>
              <ion-icon name="search-sharp"></ion-icon>
            </span>
            <span className={cx('header-search-btn-title')}>Tìm kiếm</span>
          </div>
          <div
            className={cx('header-search-button')}
            onClick={handleClickBtnSearch}
          >
            <span className={cx('header-search-icon')}>
              <ion-icon name="search-sharp"></ion-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(DetailHeader);
