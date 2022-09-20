import React from 'react';
import './PlacesItem.scss';
import Skeleton from '@mui/material/Skeleton';

PlacesItem.propTypes = {};

function PlacesItem({ length }) {
  return (
    <div className="place-wrapper">
      {Array(length)
        .fill(0)
        .map((item, index) => (
          <div className="place-item" key={index}>
            <Skeleton
              animation="wave"
              height="300px"
              width="100%"
              variant="rounded"
              style={{ borderRadius: '12px' }}
            />
            <div className="place-item-content">
              <div className="place-item-decs">
                <Skeleton
                  animation="wave"
                  width="1var(--gap-80)"
                  height="30px"
                ></Skeleton>
                <Skeleton
                  animation="wave"
                  width="90px"
                  height="24px"
                ></Skeleton>
                <Skeleton
                  animation="wave"
                  width="178px"
                  height="20px"
                ></Skeleton>
                <Skeleton
                  animation="wave"
                  width="60px"
                  height="20px"
                ></Skeleton>
              </div>
              <div className="place-item-rating">
                <Skeleton
                  animation="wave"
                  width="50px"
                  height="20px"
                ></Skeleton>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PlacesItem;
