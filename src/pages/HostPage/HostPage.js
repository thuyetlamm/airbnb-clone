import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomNextArrows from '~/components/NavigationBar/CustomNextArrows';
import CustomPrevArrows from '~/components/NavigationBar/CustomPrevArrows';
import './HostPage.scss';
HostPage.propTypes = {};

function HostPage(props) {
  const [playVideo, setPlayVideo] = useState(true);
  const [indexSlide, setIndexSlide] = useState(0);
  const videoRef = useRef();
  const headerMainRef = useRef();
  const handleClickVideo = () => {
    setPlayVideo((playVideo) => !playVideo);
  };

  useEffect(() => {
    if (!playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [playVideo]);
  const handleVideoChange = () => {
    if (videoRef.current.currentTime === videoRef.current.duration) {
      setPlayVideo(false);
    }
  };
  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 646) {
        headerMainRef.current.style.display = 'block';
        headerMainRef.current.style.opacity = 1;
        headerMainRef.current.style.transition = 'all 0.2s linear';
      }
      if (document.documentElement.scrollTop < 30) {
        headerMainRef.current.style.display = 'none';
        headerMainRef.current.style.opacity = 0;
        headerMainRef.current.style.transition = 'all 0.2s linear';
      }
    };
  }, []);
  const hostList = [
    {
      id: 1,
      imageURL:
        'https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg?im_w=1200 2x',
      subTitle:
        'Việc cho thuê căn hộ studio đã làm thay đổi cuộc sống của tôi và mang đến cho tôi những trải nghiệm và con người đáng nhớ.',
    },
    {
      id: 2,
      imageURL:
        'https://a0.muscache.com/im/pictures/31fb3cb1-c2a1-4e14-a9e9-6f279991790b.jpg?im_w=1200 2x',
      subTitle:
        'Cho thuê nhà cho phép tôi trở thành một doanh nhân và vạch ra con đường dẫn đến tự do tài chính.',
    },
    {
      id: 3,
      imageURL:
        'https://a0.muscache.com/im/pictures/a464d642-695e-4d2c-aa51-2302de067f45.jpg?im_w=1200 2x',
      subTitle:
        'Chúng tôi có thể bảo tồn nền văn hóa của mình bằng cách tổ chức trải nghiệm làm mì Ý.',
    },
    {
      id: 4,
      imageURL:
        'https://a0.muscache.com/im/pictures/d8627b07-b42c-40a1-807f-1eac9de39311.jpg?im_w=1200 2x',
      subTitle:
        'Airbnb đã cho tôi cơ hội tạo công ăn việc làm cho chính bản thân bằng cách làm những điều tôi yêu thích – đó là chăm sóc khách thuê nhà mình.',
    },
    {
      id: 5,
      imageURL:
        'https://a0.muscache.com/im/pictures/b56f3d7c-5006-4ed2-967a-c421e3275b1f.jpg?im_w=1200 2x',
      subTitle:
        'Việc cho thuê căn lều bedouin đã cho tôi cơ hội được gặp gỡ những con người đến từ khắp nơi trên thế giới.',
    },
    {
      id: 6,
      imageURL:
        'https://a0.muscache.com/im/pictures/334530d8-2ad6-40e8-8fd2-4ac0835e693a.jpg?im_w=1200 2x',
      subTitle:
        'Tôi rất thích cho thuê ngôi nhà sinh thái của mình để mọi người có thể kết nối với thiên nhiên và những người thân yêu của họ.',
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];
  const handleGetCurrentSlide = (current, next) => {
    setIndexSlide(next);
  };
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '40px',
    draggable: true,
    speed: 600,
    focusOnSelect: true,
    nextArrow: <CustomNextArrows />,
    prevArrow: <CustomPrevArrows />,
  };
  return (
    <div className="host-page">
      <div className="wrapper">
        <div className="host-header">
          <div className="host-header-left">
            <div className="host-header-left-content">
              <h1>
                Mở ra cánh cửa
                <br></br>đón tiếp khách
              </h1>
              <button>Thử đón tiếp khách</button>
            </div>
          </div>
          <div className="host-header-right">
            <video
              autoPlay={true}
              className="host-header-right-video"
              aria-label="Chelsea, Chủ nhà ở Philadelphia, mỉm cười khi mở cửa. Soraya, Chủ nhà ở Mumbai, mỉm cười khi mở cửa trước cùng một người khác ở bên cạnh. Mohamed, Chủ nhà ở Johannesburg, mỉm cười khi mở cửa. Maria, Chủ nhà ở Mexico City, gật đầu mỉm cười khi mang cây đi."
              crossOrigin="anonymous"
              preload="auto"
              playsInline
              ref={videoRef}
              muted
              onTimeUpdate={handleVideoChange}
            >
              <source
                src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
                type="video/mp4"
              />
            </video>
            <button
              className="video-button"
              type="button"
              aria-label="Phát"
              onClick={handleClickVideo}
            >
              {playVideo ? (
                <ion-icon name="pause-sharp"></ion-icon>
              ) : (
                <ion-icon name="play-sharp"></ion-icon>
              )}
            </button>
          </div>
        </div>
        <div className="host-carousel">
          <div className="container">
            <div className="host-info">
              <h2 className="host-info-title" tabIndex={-1}>
                <div role="text">
                  Bạn có thể đón tiếp
                  <br></br>
                  bất kỳ ai, ở bất cứ đâu
                </div>
              </h2>
              <div className="host-info-carousel">
                <Slider {...settings} beforeChange={handleGetCurrentSlide}>
                  {hostList.map((item) => (
                    <div className="host-info-item" key={item.id}>
                      <img srcSet={item?.imageURL} alt={item?.subTitle} />
                    </div>
                  ))}
                </Slider>
                <div className="host-info-decs">
                  <div className="host-info-content">
                    <h2 className="host-info-content-title" role="text">
                      {hostList[indexSlide]?.subTitle}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="header-main" ref={headerMainRef}>
          <div className="container">
            <div className="header-main-container">
              <Link to="/">
                <span className="header-main-icon">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block',
                      height: '36px',
                      width: '36px',
                      fill: 'currentColor',
                    }}
                    aria-label="Trang chủ Airbnb"
                    role="img"
                    focusable="false"
                  >
                    <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.267 3.42-6.414 3.615l-.28.019-.267.006C5.377 31 2.5 28.584 2.5 24.522l.005-.469c.026-.928.23-1.768.83-3.244l.216-.524c.966-2.298 6.083-12.989 7.707-16.034C12.537 1.963 13.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.345.836c-.427 1.071-.573 1.655-.605 2.24l-.009.33v.206C4.5 27.395 6.411 29 8.857 29c1.773 0 3.87-1.236 5.831-3.354-2.295-2.938-3.855-6.45-3.855-8.91 0-2.913 1.933-5.386 5.178-5.42 3.223.034 5.156 2.507 5.156 5.42 0 2.456-1.555 5.96-3.855 8.907C19.277 27.766 21.37 29 23.142 29c2.447 0 4.358-1.605 4.358-4.478l-.004-.411c-.019-.672-.17-1.296-.714-2.62l-.248-.6c-1.065-2.478-5.993-12.768-7.538-15.664C18.053 3.539 17.24 3 16 3zm.01 10.316c-2.01.021-3.177 1.514-3.177 3.42 0 1.797 1.18 4.58 2.955 7.044l.21.287.174-.234c1.73-2.385 2.898-5.066 2.989-6.875l.006-.221c0-1.906-1.167-3.4-3.156-3.421h-.001z"></path>
                  </svg>
                </span>
              </Link>
              <div className="header-main-right">
                <Link to="/asksuperhost" className="header-main-ask">
                  <span
                    className="header-main-ask-avatar"
                    style={{ marginLeft: '-18px' }}
                  >
                    <span
                      className="header-main-ask-avatar-item"
                      style={{ right: '-18px', zIndex: 3 }}
                    >
                      <div className="header-main-ask-avatar-host-img">
                        <img
                          src="https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg"
                          alt="avatar"
                          style={{
                            objectFit: 'cover',
                            verticalAlign: 'bottom',
                            borderRadius: '50%',
                          }}
                        />
                      </div>
                    </span>
                    <span
                      className="header-main-ask-avatar-item"
                      style={{ right: '-9px', zIndex: 2 }}
                    >
                      <div className="header-main-ask-avatar-host-img">
                        <img
                          src="https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg"
                          alt="avatar"
                          style={{
                            objectFit: 'cover',
                            verticalAlign: 'bottom',
                            borderRadius: '50%',
                          }}
                        />
                      </div>
                    </span>
                    <span
                      className="header-main-ask-avatar-item"
                      style={{ right: '0', zIndex: 1 }}
                    >
                      <div className="header-main-ask-avatar-host-img">
                        <img
                          src="https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg"
                          alt="avatar"
                          style={{
                            objectFit: 'cover',
                            verticalAlign: 'bottom',
                            borderRadius: '50%',
                          }}
                        />
                      </div>
                    </span>
                  </span>
                  Hỏi ý kiến Chủ nhà siêu cấp
                </Link>
                <button>Thử đón tiếp khách</button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default HostPage;
