import React, { useEffect, useState } from 'react';
import './Footer.scss';
import Skeleton from '@mui/material/Skeleton';
import {
  AirPlaneIcon,
  ChatBoxIcon,
  HeartIcon,
  PeopleIcon,
  SearchIcon,
} from '~/assets/IconImages/Icon';

Footer.propTypes = {};

function Footer(props) {
  const [loadingFooter, setloadingFooter] = useState(true);
  const [active, setActive] = useState(1);
  useEffect(() => {
    const timeIds = setInterval(() => {
      setloadingFooter(false);
    }, [1200]);
    return () => {
      clearInterval(timeIds);
    };
  }, []);
  const arrFooter = [
    {
      id: 1,
      title: 'Khám phá',
      icon: <SearchIcon />,
    },
    {
      id: 2,
      title: 'Yêu thích',
      icon: <HeartIcon />,
    },
    {
      id: 3,
      title: 'Chuyến đi',
      icon: <AirPlaneIcon />,
    },
    {
      id: 4,
      title: 'Hộp thư',
      icon: <ChatBoxIcon />,
    },
    {
      id: 5,
      title: 'Hồ sơ',
      icon: <PeopleIcon />,
    },
  ];
  const handleClick = (id) => {
    setActive(id);
  };
  return (
    <div>
      {!loadingFooter && (
        <div className="footer">
          <div className="footer-container">
            <div className="footer-left">
              <span>© 2022 Airbnb, Inc.</span>
              <ul className="footer-policy">
                <li>Quyền riềng tư</li>
                <li>Điều khoản</li>
                <li>Sơ đồ trang web</li>
              </ul>
            </div>
            <div className="footer-right">
              <button type="button" className="footer-btn-languages btn">
                <span>
                  <ion-icon name="earth-outline"></ion-icon>
                </span>
                <span>Tiếng Việt (VN)</span>
              </button>
              <button type="button" className="footer-btn-money btn">
                <span>$</span>
                <span>USD</span>
              </button>
              <button type="button" className="footer-btn-help btn">
                <span>Hỗ trợ tài nguyên</span>
                <span>
                  <ion-icon name="chevron-up-outline"></ion-icon>
                </span>
              </button>
            </div>
          </div>
          <div class="footer-mobile">
            {arrFooter.map((item) => (
              <a
                href="#"
                key={item.id}
                onClick={() => handleClick(item.id)}
                className=""
              >
                <div className="footer-item">
                  <span
                    className={`footer-icon ${active === item.id && 'active'}`}
                  >
                    {item.icon}
                  </span>
                  <span className="footer-title">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
      {loadingFooter && (
        <div className="footer">
          <div className="footer-container">
            <div className="footer-left">
              <Skeleton height={28} width="460px" />
            </div>
            <div className="footer-right">
              <Skeleton height={28} width="380px" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
