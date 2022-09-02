import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './DetailHeader.module.scss';
import classNames from 'classnames/bind';
import ClearIcon from '@material-ui/icons/Clear';
import moment from 'moment';
const cx = classNames.bind(styles);
function DetailHeader({
  indexActive,
  startDate,
  endDate = null,
  handleGetIdActive,
  handleClearDate,
}) {
  const [activeSearch, setActiveSearch] = React.useState(indexActive);
  const [isActiveTab, setActiveTab] = React.useState(0);
  const navLinkArr = ['Chỗ ở', 'Trải nghiệm', 'Trải nghiệm trực tuyến'];
  const subNavLinkArr = [
    {
      id: 1,
      title: 'Địa điểm',
      subTitle: 'Tìm kiếm điểm đến',
      styleForElement: {
        padding: '14px 32px',
        width: '326px',
      },
      titleFitler: null,
    },
    {
      id: 2,
      title: 'Nhận phòng',
      subTitle: 'Thêm ngày',
      styleForElement: {
        padding: '18px 0 18px 22px',
      },
      titleFitler: startDate,
      icon: <ClearIcon />,
    },
    {
      id: 4,
      title: 'Trả phòng',
      subTitle: 'Thêm ngày',
      styleForElement: {
        padding: '18px 0 18px  22px',
      },
      titleFitler: endDate,
      icon: <ClearIcon />,
    },
    {
      id: 3,
      title: 'Khách',
      subTitle: 'Thêm khách',
      styleForElement: {
        padding: '18px 20px',
        width: '260px',
      },
      titleFitler: null,
    },
  ];
  const hanleActiveClick = (idx) => {
    setActiveTab(idx);
  };
  const handleClickSearchItem = (id) => {
    setActiveSearch(id);
    handleGetIdActive(id);
  };
  const handleClickOutSide = (e) => {
    if (e.target === e.currentTarget) {
      setActiveSearch(null);
    }
  };
  return (
    <div
      className={cx('header-detaill')}
      onClick={(e) => handleClickOutSide(e)}
    >
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
      <div className={cx('wrap-search')}>
        <div className={cx('header-search')}>
          {subNavLinkArr.map((item, index) => (
            <div
              className={cx('header-search-list', {
                'active-search': item.id === activeSearch,
              })}
              style={item?.styleForElement}
              key={index}
              onClick={() => handleClickSearchItem(item.id)}
            >
              <h1 className={cx('header-search-title')}>{item.title}</h1>
              <p className={cx('header-search-subTitle')}>
                {item.titleFitler
                  ? moment(item.titleFitler?._d).format('DD/MM')
                  : item.subTitle}
                {item.titleFitler && (
                  <span
                    className={cx('header-search-clear')}
                    onClick={handleClearDate}
                  >
                    {item.icon}
                  </span>
                )}
              </p>
            </div>
          ))}
          {activeSearch ? (
            <div className={cx('header-search-buttonn')}>
              <span className={cx('header-search-icon')}>
                <ion-icon name="search-sharp"></ion-icon>
              </span>
              <span className={cx('header-search-btn-title')}>Tìm kiếm</span>
            </div>
          ) : (
            <div className={cx('header-search-button')}>
              <span className={cx('header-search-icon')}>
                <ion-icon name="search-sharp"></ion-icon>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(DetailHeader);
