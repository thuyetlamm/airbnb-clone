import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import roomsApi from '~/api/roomsApi';
import Header from '~/components/Header/Header';
import './DetailPlacePage.scss';
const qs = require('qs');

DetailPlacePage.propTypes = {};

function DetailPlacePage() {
  const [placeList, setPlaceList] = useState([]);
  const navigation = useNavigate();
  const location = useLocation();
  const [filters, setFilters] = useState({
    populate: '*',
    pagination: {
      page: 1,
      pageSize: 20,
    },
    filters: {
      id: {
        $in: JSON.parse(localStorage.getItem('place_id')) + 5,
      },
    },
  });
  useEffect(() => {
    (async () => {
      try {
        navigation(`?${qs.stringify(filters)}`);
        const response = await roomsApi.getAll(filters);
        setPlaceList(response);
      } catch (error) {
        throw new Error();
      }
    })();
  }, [filters]);
  return (
    <div className="detail-page">
      <Helmet>
        <title>{placeList[0]?.attributes.nameOfPlace}</title>
      </Helmet>
      <div className="detail-container">
        <header>
          <Header />
        </header>
        <div className="container">
          <div className="detail-main">
            <div className="detail-main-title">
              <h2>Ba hao Residence x MAITRI CHIT ROOM</h2>
              <div className="detail-main-decs">
                <span>
                  <ion-icon name="star"></ion-icon> 4,93
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
                    Bangkok, Krung Thep Maha Nakhon, Thái Lan
                  </Link>
                </span>
              </div>
            </div>
            <div className="detail-main-images">
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
              <div className="detail-main-info-convenient">
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
                        Với tốc độ 342 Mbps, bạn có thể thực hiện cuộc gọi video
                        và phát trực tuyến video cho cả nhóm.
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
                    P
                  </div>
                </div>
              </div>
              <div className="detail-main-info-booking"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPlacePage;
