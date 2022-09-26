import Skeleton from '@mui/material/Skeleton';
import React from 'react';
import Header from '~/components/Header/Header';
import './DetailPlacePageSkeleton.scss';

function DetailPlacePageSkeleton() {
  return (
    <div className="wrapper">
      <div className="detail-page">
        <Header />
      </div>
      <div className="detail-container">
        <div className="container">
          <div className="detail-main">
            <div className="detail-main-title">
              <Skeleton width={400} height={36} animation="wave" />
              <div className="detail-main-decs">
                <span>
                  <Skeleton width={200} height={28} animation="wave" />
                </span>
              </div>
            </div>
            <div className="detail-skeleton">
              <div className="left"></div>
              <div className="right">
                <span className="span-left">
                  <div className="skeleton-item"></div>
                  <div className="skeleton-item"></div>
                </span>
                <span className="span-right">
                  <div className="skeleton-item"></div>
                  <div className="skeleton-item"></div>
                </span>
              </div>
            </div>
            <div className="footer-loading">
              <div className="info-left">
                <span>
                  <Skeleton width={400} height={44} animation="wave" />
                  <Skeleton width={200} height={32} animation="wave" />
                </span>
                <span>
                  <Skeleton
                    width={48}
                    height={48}
                    animation="wave"
                    variant="waverounded"
                  />
                </span>
              </div>
              <div className="info-right">
                <Skeleton width={200} height={40} animation="wave" />
                <Skeleton width={300} height={80} animation="wave" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPlacePageSkeleton;
