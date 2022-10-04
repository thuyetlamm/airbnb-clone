import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import './BookingConfirm.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import Login from '~/components/features/Auth/component/Login/Login';
import Payment from '~/components/features/Payments/Payment/Payment';
import { Box, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Register from '~/components/features/Auth/component/Register/Register';

const qs = require('qs');

const useStyles = makeStyles((theme) => ({
  boxChangeAuth: {
    textAlign: 'center',
  },
  btnChangeAuth: {
    textDecoration: 'underline',
    width: '100%',
    margin: '10px 0',
  },
}));
const MODE = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
};

function BookingConfirm(props) {
  const classes = useStyles();
  const counter = useSelector((state) => state.counter);
  const detailPlace = useSelector((state) => state.detailPlace);
  const detailItem = detailPlace.detailItem;
  const navigation = useNavigate();
  const loggedIn = useSelector((state) => state.user.current);
  const isLoggedUser = !!loggedIn.id;
  const [mode, setMode] = useState('REGISTER');
  useEffect(() => {
    const params = {
      numberOfAdults: counter.countBig,
      checkin: detailItem[detailItem.length - 1].infoPlace?.startDate,
      checkout: detailItem[detailItem.length - 1].infoPlace?.endDate,
      numberOfGuest: counter.totalCount,
      categoryIds:
        detailItem[detailItem.length - 1].infoPlace?.placeList.categoryIds,
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
              <div className="booking-main-left">
                <div className="booking-main-promotion">
                  <div className="booking-promotion-wrap">
                    <div className="booking-promotion-decs">
                      <h3>Giá thấp hơn.</h3>
                      <span>
                        Những ngày bạn chọn có giá thấp hơn $37 so với mức giá
                        trung bình theo đêm trong 60 ngày qua.
                      </span>
                    </div>
                    <div className="booking-promotion-icon">
                      <span>
                        <FontAwesomeIcon icon={faTags} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="booking-main-infodate">
                  <h3>Chuyến đi của bạn</h3>
                  <div className="booking-main-date">
                    <div>
                      <span className="booking-main-info-title">Ngày</span>
                      <span className="booking-main-info-decs">
                        {detailItem[detailItem.length - 1].infoPlace.startDate}{' '}
                        - {detailItem[detailItem.length - 1].infoPlace.endDate}
                      </span>
                    </div>
                    <span className="booking-main-edit">Chỉnh sửa</span>
                  </div>
                  <div className="booking-main-date">
                    <div>
                      <span className="booking-main-info-title">Khách</span>
                      <span className="booking-main-info-desc">
                        {detailItem[detailItem.length - 1].infoPlace.quantity}{' '}
                        khách
                      </span>
                    </div>
                    <span className="booking-main-edit">Chỉnh sửa</span>
                  </div>
                </div>
                {!isLoggedUser && (
                  <div className="booking-main-author">
                    <h2>Đăng nhập hoặc đăng ký để đặt phòng/đặt chỗ</h2>
                    <div className="booking-main-author-form">
                      <Paper>
                        {mode === MODE.LOGIN && <Login />}
                        {mode === MODE.REGISTER && (
                          <div className="booking-register">
                            <Register />
                            <Box className={classes.boxChangeAuth}>
                              <Button
                                className={classes.btnChangeAuth}
                                onClick={() => setMode('LOGIN')}
                              >
                                ALREADY HAVE AN ACCOUNT. LOGIN HERE !
                              </Button>
                            </Box>
                          </div>
                        )}
                      </Paper>
                    </div>
                  </div>
                )}
                {isLoggedUser && (
                  <div className="booking-main-pay">
                    <h2 className="booking-main-pay-title">
                      Thanh Toán Bằng Thẻ
                    </h2>
                    <Paper elevation={2}>
                      <Payment />
                    </Paper>
                  </div>
                )}
              </div>
              <div className="booking-main-right">
                <div className="booking-main-preview">
                  <div className="booking-main-preview-wrapper">
                    <div className="booking-main-preview-top">
                      <div className="booking-main-preview-img">
                        <img
                          src="https://images.unsplash.com/photo-1659767203617-9b6d1d94502c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                          alt="dfgdrsg"
                        />
                      </div>
                      <div className="booking-main-preview-info">
                        <div>
                          <p>Phòng riêng tại hang động</p>
                          <span>Authentic Bedouin Cave Little Petra</span>
                        </div>
                        <div>
                          <span>
                            <ion-icon name="star"></ion-icon> 4.96
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="booking-main-aircover">
                      <div>
                        Đặt phòng của bạn được bảo vể bởi{' '}
                        <div>
                          <img
                            src="https://a0.muscache.com/pictures/aircover/aircover-logo/original/56683a2f-f11b-43f6-8af7-a1b3861b2c85.svg"
                            alt="Aircover"
                          ></img>
                        </div>
                      </div>
                    </div>
                    <div className="booking-main-preview-price">
                      <div className="booking-main-preview-title">
                        <h2>Chi tiết giá</h2>
                      </div>
                      <div>
                        <div>
                          <span>
                            $
                            {
                              detailItem[detailItem.length - 1].infoPlace
                                .placeList.priceOfPlace
                            }
                          </span>{' '}
                          x{' '}
                          <span>
                            {
                              detailItem[detailItem.length - 1].infoPlace
                                .minusDate
                            }{' '}
                            đêm
                          </span>
                        </div>
                        <span>$208,00</span>
                      </div>
                      <div>
                        <span>Phí dịch vụ</span>
                        <span>$32,00</span>
                      </div>
                    </div>
                    <div className="booking-main-preview-total">
                      <span>Tổng.(USD).</span>
                      <span>$240,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingConfirm;
