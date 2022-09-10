import React, { useEffect } from 'react';
import './BookingConfirm.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const qs = require('qs');

BookingConfirm.propTypes = {};

function BookingConfirm(props) {
  const counter = useSelector((state) => state.counter);
  const detailPlace = useSelector((state) => state.detailPlace);
  const navigation = useNavigate();

  useEffect(() => {
    const params = {
      numberOfAdults: counter.countBig,
      checkin: detailPlace.detailItem[0]?.startDate,
      checkout: detailPlace.detailItem[0]?.endDate,
      numberOfGuest: counter.totalCount,
      categoryIds: detailPlace.detailItem[0]?.placeList.categoryIds,
    };
    navigation(
      `/book/stays/${JSON.parse(
        localStorage.getItem('place_id')
      )}?${qs.stringify(params)}`
    );
  }, []);

  return (
    <div className="wrapper">
      <section className="booking-confirm">
        <Helmet>
          <title>Xác nhận và thanh toán</title>
        </Helmet>
        <header className="booking-confirm-header">
          <Link to="/">
            <div className="logo-header">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
                alt="logo"
                className="logo-icon"
              />
              <span className="logo-title">airbnb</span>
            </div>
          </Link>
        </header>
        <div className="container">
          <div className="booking-container">
            <div className="booking-top-wrap">
              <div className="booking-top-title">
                <button className="booking-title-btn">
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <h1>Xác nhận và thanh toán • Airbnb</h1>
              </div>
            </div>
            <div className="booking-main">
              <div className="booking-main-left"></div>
              <div className="booking-main-right"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingConfirm;
