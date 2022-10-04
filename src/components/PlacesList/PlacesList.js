import React from 'react';
import PropTypes from 'prop-types';

import styles from './PlacesList.module.scss';
import classNames from 'classnames/bind';
import PlacesItem from '~/components/PlacesItems/PlacesItem';
import PlacesItemSkeleton from '~/components/PlacesItems/PlacesItemSkeleton';

const cx = classNames.bind(styles);
PlacesList.propTypes = {
  placeList: PropTypes.object.isRequired,
  loadingPlaceList: PropTypes.bool,
  onChange: PropTypes.func,
};

function PlacesList({ loadingPlaceList, placeList, onChange }) {
  return (
    <div className={cx('container')}>
      {!loadingPlaceList && (
        <PlacesItem placeList={placeList} onChange={onChange} />
      )}
      {loadingPlaceList && <PlacesItemSkeleton length={12} />}
    </div>
  );
}

export default PlacesList;
