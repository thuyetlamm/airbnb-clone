import Skeleton from '@mui/material/Skeleton';
import React from 'react';
import Header from '~/components/Header/Header';
import './DetailPlacePageSkeleton.scss';

DetailPlacePageSkeleton.propTypes = {};

function DetailPlacePageSkeleton(props) {
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
            <div className="detail-main-images">
              <div className="left">
                <Skeleton width="100%" height={380} animation="wave" />
              </div>
              <div className="right">
                <span className="span-left">
                  <Skeleton width="100%" height={190} animation="wave" />

                  <Skeleton width="100%" height={190} animation="wave" />
                </span>
                <span className="span-right">
                  <Skeleton width="100%" height={190} animation="wave" />

                  <Skeleton width="100%" height={190} animation="wave" />
                </span>
              </div>
            </div>
            <div className="footer">
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
