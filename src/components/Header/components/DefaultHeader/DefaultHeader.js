import React, { useEffect } from 'react';
import './DefaultHeader.scss';
import PropTypes from 'prop-types';
import Item from 'antd/lib/list/Item';
import Skeleton from '@mui/material/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoading } from '~/components/NavigationBar/categorySlice';
import { setActiveId, toggleShowCalendar } from '~/common/globalSlice';

DefaultHeader.prototype = {
  hanldeShowDetailHeader: PropTypes.func,
};
function DefaultHeader(props) {
  const { hanldeShowDetailHeader } = props;
  const dispatch = useDispatch();
  const loadingDefaultHeader = useSelector((state) => state.category);
  const handleClick = (id) => {
    dispatch(setActiveId(id));
    dispatch(toggleShowCalendar(false));
    if (hanldeShowDetailHeader) {
      const newArray = {
        isActive: true,
      };
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
      <div>
        {!loadingDefaultHeader.loading &&
          searchArray.map((item, index) => (
            <div
              className="header-search-title"
              onClick={() => handleClick(item.id)}
              key={item.id}
            >
              <div className="search-title-wrap">{item.title}</div>
            </div>
          ))}
        {loadingDefaultHeader.loading && (
          // Array(3)
          //   .fill(0)
          //   .map((item, index) => (
          <>
            <Item>
              <div className="header-search-title">
                <div className="search-title-wrap">
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width="80px"
                    height={30}
                  />
                </div>
              </div>
            </Item>
            <Item>
              <div className="header-search-title">
                <div className="search-title-wrap">
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width="80px"
                    height={30}
                  />
                </div>
              </div>
            </Item>
            <Item>
              <div style={{ paddingLeft: '14px' }}>
                <div className="search-title-wrap">
                  <Skeleton
                    variant="text"
                    animation="wave"
                    width="80px"
                    height={30}
                  />
                </div>
              </div>
            </Item>
          </>
        )}
      </div>
      <div className="header-search-button">
        <span className="header-search-icon">
          <ion-icon name="search-sharp"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default React.memo(DefaultHeader);
