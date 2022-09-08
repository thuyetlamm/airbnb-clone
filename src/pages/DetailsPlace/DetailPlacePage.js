import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import roomsApi from '~/api/roomsApi';
import Header from '~/components/Header/Header';
import './DetailPlacePage.scss';
import moment from 'moment';

import {
  increateBig,
  decreateBig,
  increateMid,
  decreateMid,
  increateSmall,
  decreateSmall,
  totalCount,
} from '~/components/features/Counter/counterSlice';

import CalendarDetail from './component/CalendarInDetailPage/CalendarDetail';
const qs = require('qs');

const convertDate = (date) => {
  const result = moment(date).format('l');
  return result;
};

DetailPlacePage.propTypes = {};
function DetailPlacePage() {
  const location = useLocation();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const counter = useSelector((state) => state.counter);
  const [placeList, setPlaceList] = useState([]);
  const [minusDate, setMinusDate] = useState(1);
  const [coreDate, setCoreDate] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [toggleArrow, setToggleArrow] = useState(true);
  const [openCalendar, setOpenCalendar] = useState(false);
  const headerRef = useRef();
  const bookingCardRef = useRef();
  const headerBooking = useRef();
  const [filters, setFilters] = useState({
    populate: '*',
    pagination: {
      page: 1,
      pageSize: 20,
    },
    filters: {
      id: {
        $in: JSON.parse(localStorage.getItem('place_id')),
      },
    },
  });
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 488) {
        headerRef.current.style.display = 'block';
        bookingCardRef.current.style.top = '120px';
      } else {
        headerRef.current.style.display = 'none';
        bookingCardRef.current.style.top = '80px';
      }
      if (document.documentElement.scrollTop > 930) {
        headerBooking.current.style.display = 'flex';
      } else {
        headerBooking.current.style.display = 'none';
      }
    });
  }, []);
  useEffect(() => {
    (async () => {
      try {
        navigation(`?${qs.stringify(filters)}`);
        const response = await roomsApi.getAll(filters);
        const { attributes } = response[0];
        setPlaceList(attributes);
      } catch (error) {
        throw new Error();
      }
    })();
  }, [filters]);
  useEffect(() => {
    const result = placeList.priceOfPlace * minusDate;
    setCoreDate(result);
    setTotalPrice(result + 5 + 27);
  }, [minusDate, placeList]);
  useEffect(() => {
    const total = counter.countBig + counter.countMid;
    dispatch(totalCount(total));
  }, [counter.countBig, counter.countMid]);
  const handleClickBtn = (e) => {
    if (e.target === e.currentTarget) {
      setToggleArrow((toggleArrow) => !toggleArrow);
    }
  };
  const handleCloseModal = (e) => {
    setToggleArrow(true);
  };
  const handleOpenCalendar = () => {
    setOpenCalendar(true);
  };
  const handleCloseCalendar = () => {
    setOpenCalendar(false);
  };
  const handleDateChange = (values) => {
    if (values?.length === 2) {
      setOpenCalendar(false);
      const startDate = convertDate(values[0]?._d).slice(0, 2);
      const endDate = convertDate(values[1]?._d).slice(0, 2);
      setMinusDate(endDate - startDate);
    }
  };

  return (
    <div className="wrapper">
      <div className="detail-page">
        <Helmet>
          <title>{placeList.nameOfPlace}</title>
        </Helmet>
        <Header />

        <header className="detail-header" ref={headerRef}>
          <div className="container">
            <div className="detail-header-container">
              <ul className="detail-header-nav-list">
                <li className="detail-header-nav-item">
                  <a href="#detail-img">Ảnh</a>
                </li>
                <li className="detail-header-nav-item">
                  <a href="#detail-convenient">Tiện nghi</a>
                </li>
                <li className="detail-header-nav-item">
                  <a href="/">Đánh giá</a>
                </li>
                <li className="detail-header-nav-item">
                  <a href="/">Vị trí</a>
                </li>
              </ul>
              <div className="detail-header-booking" ref={headerBooking}>
                <div className="detail-header-info">
                  <div className="detail-header-price">${totalPrice} đêm</div>
                  <span className="detail-header-rating">
                    <ion-icon name="star"></ion-icon>
                    {placeList.ratingVote}
                  </span>
                </div>
                <div className="detail-header-button">
                  <button type="button">Đặt phòng</button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="detail-container">
          <div className="container">
            <div className="detail-main">
              <div className="detail-main-title">
                <h2>{placeList.nameOfPlace}</h2>
                <div className="detail-main-decs">
                  <span>
                    <ion-icon name="star"></ion-icon> {placeList.ratingVote}
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 14 24"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                    >
                      <path
                        d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823"
                        fill="#000"
                      ></path>
                      <path
                        d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z"
                        fill="#000"
                      ></path>
                      <path d="m12 9.5-5 3.75-5-3.75v-7.5z" fill="#000"></path>
                      <path
                        d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z"
                        fill="#000"
                      ></path>
                    </svg>
                    Chủ nhà siêu cấp
                  </span>
                  <span>
                    <Link to={`${location.pathname}/location`}>
                      {placeList.country}
                    </Link>
                  </span>
                </div>
              </div>
              <div className="detail-main-images" id="detail-img">
                <div className="detail-main-images-item">
                  <img
                    className="layout-img-item"
                    src="https://a0.muscache.com/im/pictures/31b5920d-16b1-494e-ac27-a71dbd09ce01.jpg?im_w=720"
                    alt="anh"
                  />
                </div>
                <div className="detail-main-images-item">
                  <img
                    className="layout-img-item"
                    src="https://a0.muscache.com/pictures/665ca3a0-9dc4-4ae5-8181-c24ba44aceb6.jpg"
                    alt="anh"
                  />
                </div>
                <div className="detail-main-images-item">
                  <img
                    className="layout-img-item"
                    src="https://a0.muscache.com/im/pictures/ff46f479-6815-4fb1-8b6f-87888f921a26.jpg?im_w=720"
                    alt="anh"
                  />
                </div>
                <div className="detail-main-images-item">
                  <img
                    className="layout-img-item"
                    src="https://a0.muscache.com/im/pictures/231aaae8-d1ea-4657-9167-0822d9e39267.jpg?im_w=720"
                    alt="anh"
                  />
                </div>
                <div className="detail-main-images-item">
                  <img
                    className="layout-img-item"
                    src="https://a0.muscache.com/im/pictures/776e701c-01af-4431-ad8a-e8fd1f9b228d.jpg?im_w=720"
                    alt="anh"
                  />
                </div>
              </div>
              <div className="detail-main-info">
                <div
                  className="detail-main-info-convenient"
                  id="detail-convenient"
                >
                  <div className="detail-main-info-room">
                    <div className="detail-main-info-type">
                      <h2>Phòng riêng tại nhà phố. Chủ nhà Bua</h2>
                      <ul className="detail-main-info-quantity">
                        <li>3 khách</li>
                        <li>1 phòng ngủ</li>
                        <li>1 giường</li>
                        <li>1 phòng tắm riêng</li>
                      </ul>
                    </div>
                    <div className="detail-main-info-avatar">
                      <img
                        src="https://a0.muscache.com/im/pictures/user/b13b4892-4c96-47c2-8aff-f8691ec2c532.jpg?im_w=240"
                        alt="host"
                      />
                      <span style={{ display: 'none' }}>
                        <svg
                          viewBox="0 0 14 24"
                          role="presentation"
                          aria-hidden="true"
                          focusable="false"
                          fill="currentColor"
                        >
                          <path
                            d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823"
                            fill="#fff"
                          ></path>
                          <path
                            d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z"
                            fill="#ffb400"
                          ></path>
                          <path
                            d="m12 9.5-5 3.75-5-3.75v-7.5z"
                            fill="#ff5a5f"
                          ></path>
                          <path
                            d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z"
                            fill="#484848"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="detail-convenient-list">
                    <div className="detail-convenient-item">
                      <ion-icon name="wifi-outline"></ion-icon>
                      <div className="detail-convenient-title">
                        <h1>Wi-fi nhanh</h1>
                        <p>
                          Với tốc độ 342 Mbps, bạn có thể thực hiện cuộc gọi
                          video và phát trực tuyến video cho cả nhóm.
                        </p>
                      </div>
                    </div>
                    <div className="detail-convenient-item">
                      <ion-icon name="home-outline"></ion-icon>
                      <div className="detail-convenient-title">
                        <h1>Tự nhận phòng</h1>
                        <p>Tự nhận phòng với hộp khóa an toàn.</p>
                      </div>
                    </div>
                    <div className="detail-convenient-item">
                      <ion-icon name="document-outline"></ion-icon>
                      <div className="detail-convenient-title">
                        <h1>Hủy miễn phí trước 29 thg 10.</h1>
                      </div>
                    </div>
                  </div>
                  <div className="detail-aircover">
                    <h2 tabIndex="-1" className="detail-aircover-img">
                      <img
                        src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                        alt="air-cover"
                      />
                    </h2>
                    <div>
                      Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp
                      Chủ nhà hủy, thông tin nhà/phòng cho thuê không chính xác
                      và những vấn đề khác như sự cố trong quá trình nhận phòng.
                    </div>
                    <button className="detail-aircover-btn" type="button">
                      Tìm hiểu thêm
                    </button>
                  </div>
                  <div className="detail-convenient-furniture">
                    <h1 className="detail-convenient-furniture-title">
                      Nơi này có những gì
                    </h1>
                    <ul className="detail-convenient-furniture-list">
                      {placeList.convenients?.data.map((item, index) => (
                        <li
                          className="detail-convenient-furniture-item"
                          key={item.id}
                        >
                          <span className="detail-convenient-furniture-icon">
                            <img
                              src={item.attributes.icon}
                              alt={item.attributes.title}
                            />
                          </span>
                          <span
                            style={
                              item.attributes.isVisible
                                ? {
                                    textDecoration: 'none',
                                  }
                                : {
                                    textDecoration: 'line-through',
                                  }
                            }
                          >
                            {item.attributes.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="detail-main-info-booking">
                  <div
                    className="detail-main-booking-card"
                    ref={bookingCardRef}
                  >
                    <div className="booking-card-top">
                      <span className="booking-card-price">
                        <span style={{ fontWeight: '600', fontSize: '2.2rem' }}>
                          {' '}
                          ${placeList.priceOfPlace}
                        </span>{' '}
                        đêm
                      </span>
                      <span className="booking-card-rating">
                        <ion-icon name="star"></ion-icon>
                        {placeList.ratingVote}
                      </span>
                    </div>
                    <div className="booking-card-calendar" ref={inputRef}>
                      <CalendarDetail
                        openCalendar={openCalendar}
                        handleDateChange={handleDateChange}
                        handleOpenCalendar={handleOpenCalendar}
                        handleCloseCalendar={handleCloseCalendar}
                      />
                      {openCalendar && (
                        <button
                          type="button"
                          className="booking-calendar-close-btn"
                          onClick={handleCloseCalendar}
                        >
                          Đóng
                        </button>
                      )}
                    </div>

                    <form className="booking-card-form">
                      <button
                        className="booking-card-dropdown"
                        type="button"
                        onClick={handleClickBtn}
                      >
                        {counter.totalCount} khách{' '}
                        {counter.countSmall !== 0 &&
                          `,${counter.countSmall} em bé`}
                      </button>
                      <p>KHÁCH</p>
                      <span>
                        {toggleArrow ? (
                          <ion-icon name="chevron-up-outline"></ion-icon>
                        ) : (
                          <ion-icon name="chevron-down-outline"></ion-icon>
                        )}
                      </span>
                      {!toggleArrow && (
                        <div className="booking-card-lists">
                          <ul className="booking-card-list">
                            <li className="booking-card-item">
                              <div className="booking-card-item-title">
                                <h4>Người lớn</h4>
                                <h5>Từ 13 tuổi trở lên</h5>
                              </div>
                              <div className="booking-card-item-btn">
                                <button
                                  type="button"
                                  onClick={() => dispatch(decreateBig())}
                                  className={`${
                                    counter.countBig === 1 && 'disabled'
                                  }`}
                                >
                                  -
                                </button>
                                {counter.countBig}
                                <button
                                  type="button"
                                  onClick={() => dispatch(increateBig())}
                                  className={`${
                                    counter.totalCount ===
                                      placeList.capacityOfPlace && 'disabled'
                                  }`}
                                >
                                  +
                                </button>
                              </div>
                            </li>
                            <li className="booking-card-item">
                              <div className="booking-card-item-title">
                                <h4>Trẻ em</h4>
                                <h5>Độ tuổi từ 2-12 tuổi</h5>
                              </div>
                              <div className="booking-card-item-btn">
                                <button
                                  type="button"
                                  onClick={() => dispatch(decreateMid())}
                                  className={`${
                                    counter.countMid === 0 && 'disabled'
                                  }`}
                                >
                                  -
                                </button>
                                {counter.countMid}
                                <button
                                  type="button"
                                  onClick={() => dispatch(increateMid())}
                                  className={`${
                                    counter.totalCount ===
                                      placeList.capacityOfPlace && 'disabled'
                                  }`}
                                >
                                  +
                                </button>
                              </div>
                            </li>
                            <li className="booking-card-item">
                              <div className="booking-card-item-title">
                                <h4>Em bé</h4>
                                <h5>Dưới 2 tuổi</h5>
                              </div>
                              <div className="booking-card-item-btn">
                                <button
                                  type="button"
                                  onClick={() => dispatch(decreateSmall())}
                                  className={`${
                                    counter.countSmall === 0 && 'disabled'
                                  }`}
                                >
                                  -
                                </button>
                                {counter.countSmall}
                                <button
                                  type="button"
                                  onClick={() => dispatch(increateSmall())}
                                >
                                  +
                                </button>
                              </div>
                            </li>
                          </ul>
                          <div className="booking-card-capacity">
                            {`Chổ ở này tối đa ${placeList.capacityOfPlace} khách , không tính em bé. 
                            Không được phép mang theo thú cưng.`}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flex: 1,
                              justifyContent: 'flex-end',
                              alignItems: 'flex-end',
                            }}
                          >
                            <button
                              className="btn-close-counter"
                              onClick={handleCloseModal}
                            >
                              Đóng
                            </button>
                          </div>
                        </div>
                      )}
                    </form>
                    <div style={{ marginTop: '16px' }}>
                      <button type="button" className="btn-submit-booking">
                        Đặt phòng
                      </button>
                    </div>
                    <span className="booking-card-subtitle">
                      <p>Bạn vẫn chưa bị trừ tiền</p>
                    </span>
                    <ul className="booking-card-price-list">
                      <li className="booking-card-price-item">
                        <span>
                          ${placeList.priceOfPlace} x {minusDate} đêm
                        </span>
                        <span>
                          ${coreDate ? coreDate : placeList.priceOfPlace}
                        </span>
                      </li>
                      <li className="booking-card-price-item">
                        <span>Phí vệ sinh</span>
                        <span>$5</span>
                      </li>
                      <li className="booking-card-price-item">
                        <span>Phí dịch vụ</span>
                        <span>$27</span>
                      </li>
                    </ul>
                    <div className="booking-card-total">
                      <span>Tổng trước thuế</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="detail-footer">
            <div className="container">
              <div className="detail-footer-content">
                <section className="detail-footer-content-section">
                  <div className="detail-footer-content-title">
                    <h3>Hỗ trợ</h3>
                  </div>
                  <ul className="detail-footer-content-list">
                    <li className="detail-footer-content-item">
                      <a href="/">Trung tâm trợ giúp</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Air Cover</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Thông tin an toàn</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Hỗ trợ người khuyết tật</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Các tùy chọn hủy</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">
                        Biện pháp ứng phó đại dịch COVID cùa chúng tôi
                      </a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Báo cáo lo ngại của hàng xóm</a>
                    </li>
                  </ul>
                </section>
                <section className="detail-footer-content-section">
                  <div className="detail-footer-content-title">
                    <h3>Cộng đồng</h3>
                  </div>
                  <ul className="detail-footer-content-list">
                    <li className="detail-footer-content-item">
                      <a href="/">Airbnb.org: nhà ở cứu trợ</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Hỗ trợ dân tị nạn Afghanistan</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Chông phân biệt đối xử</a>
                    </li>
                  </ul>
                </section>
                <section className="detail-footer-content-section">
                  <div className="detail-footer-content-title">
                    <h3>Đón tiếp khách</h3>
                  </div>
                  <ul className="detail-footer-content-list">
                    <li className="detail-footer-content-item">
                      <a href="/">Thử đón tiếp khách</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Air Cover cho chủ nhà</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Xem tài nguyên đón tiếp khách</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Truy cập diễn đàn cộng đồng</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Đón tiếp khách có trách nhiệm</a>
                    </li>
                  </ul>
                </section>
                <section className="detail-footer-content-section">
                  <div className="detail-footer-content-title">
                    <h3>Airbnb</h3>
                  </div>
                  <ul className="detail-footer-content-list">
                    <li className="detail-footer-content-item">
                      <a href="/">Trang tin tức</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Tìm hiểu các tính năng mới</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Thư ngỏ từ các nhà sáng lập</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Cơ hội nghề nghiệp</a>
                    </li>
                    <li className="detail-footer-content-item">
                      <a href="/">Nhà đầu tư</a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default DetailPlacePage;
