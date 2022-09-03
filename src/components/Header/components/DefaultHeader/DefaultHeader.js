import React, { useEffect, useRef, useState } from 'react';
import './DefaultHeader.scss';
import PropTypes from 'prop-types';
import Item from 'antd/lib/list/Item';
import Skeleton from '@mui/material/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoading } from '~/components/NavigationBar/categorySlice';

DefaultHeader.prototype = {
  hanldeShowDetailHeader: PropTypes.func,
};
function DefaultHeader(props) {
  const { hanldeShowDetailHeader } = props;
  const dispatch = useDispatch();
  const loadingDefaultHeader = useSelector((state) => state.category);
  const handleClick = (id) => {
    const newArray = {
      id,
      isActive: true,
    };
    if (hanldeShowDetailHeader) {
      hanldeShowDetailHeader(newArray);
    }
  };
  const searchArray = [
    {
      id: 1,
      title: 'Địa điểm bất kỳ',
    },
    {
      id: 2,
      title: 'Tuần bất kỳ',
    },
    {
      id: 3,
      title: 'Thêm khách',
    },
  ];
  useEffect(() => {
    if (loadingDefaultHeader.loading) {
      dispatch(toggleLoading(false));
    }
  }, []);
  return (
    <div className="header-search">
      {!loadingDefaultHeader.loading &&
        searchArray.map((item, index) => (
          <span
            className="header-search-title"
            onClick={() => handleClick(item.id)}
            key={item.id}
          >
            {item.title}
          </span>
        ))}
      {loadingDefaultHeader.loading &&
        Array(3)
          .fill(0)
          .map((item, index) => (
            <Item key={index}>
              <span className="header-search-title">
                <Skeleton
                  variant="text"
                  animation="wave"
                  width="74px"
                  height={24}
                />
              </span>
            </Item>
          ))}
      <div className="header-search-button">
        <span className="header-search-icon">
          <ion-icon name="search-sharp"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default React.memo(DefaultHeader);
