import React from 'react';
import './DefaultHeader.scss';
import PropTypes from 'prop-types';
DefaultHeader.prototype = {
  hanldeShowDetailHeader: PropTypes.func,
};
function DefaultHeader(props) {
  const { hanldeShowDetailHeader } = props;
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
  return (
    <div className="header-search">
      {searchArray.map((item, index) => (
        <span
          className="header-search-title"
          onClick={() => handleClick(item.id)}
          key={item.id}
        >
          {item.title}
        </span>
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
