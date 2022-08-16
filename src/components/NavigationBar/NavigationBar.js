import React, { useState, useRef, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import styles from './NavigationBar.module.scss';
import classNames from 'classnames/bind';
import Item from 'antd/lib/list/Item';
import categoryApi from '~/api/categoryApi';
import Skeleton from '@mui/material/Skeleton';
const cx = classNames.bind(styles);
NavigationBar.propTypes = {};

function NavigationBar(props) {
  const navBarArr = [
    {
      id: 1,
      imageLink:
        'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
      title: 'Đảo',
      widthForItem: '40px',
    },
    {
      id: 2,
      imageLink:
        'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
      title: 'Bãi biển',
      widthForItem: '40px',
    },
    {
      id: 3,
      imageLink:
        'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
      title: 'Hồ bơi tuyệt vời',
      widthForItem: '40px',
    },
    {
      id: 4,
      imageLink:
        'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
      title: 'Thật ân tượng',
      widthForItem: '40px',
    },
    {
      id: 5,
      imageLink:
        'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
      title: 'Công viên quốc gia',
      widthForItem: '40px',
    },
    {
      id: 6,
      imageLink:
        'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
      title: 'Nhà nhỏ',
      widthForItem: '40px',
    },
    {
      id: 8,
      imageLink:
        'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
      title: 'Thiết kế',
      widthForItem: '40px',
    },
    {
      id: 9,
      imageLink:
        'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg',
      title: 'Bắc cục',
      widthForItem: '40px',
    },
    {
      id: 10,
      imageLink:
        'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
      title: 'Cabin',
      widthForItem: '40px',
    },
    {
      id: 11,
      imageLink:
        'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg',
      title: 'Ven hồ',
    },
    {
      id: 12,
      imageLink:
        'https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg',
      title: 'Đường trượt tuyết tới thẳng chỗ ở',
      widthForItem: '200px',
    },
    {
      id: 13,
      imageLink:
        'https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg',
      title: 'Chơi golf',
      widthForItem: '40px',
    },
    {
      id: 14,
      imageLink:
        'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
      title: 'Khung cảnh tuyệt vời',
      widthForItem: '40px',
    },
    {
      id: 15,
      imageLink:
        'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg',
      title: 'Hang động',
      widthForItem: '40px',
    },
    {
      id: 16,
      imageLink:
        'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
      title: 'Lướt sóng',
      widthForItem: '40px',
    },
    {
      id: 17,
      imageLink:
        'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg',
      title: 'Nhà khung chữ A',
      widthForItem: '40px',
    },
    {
      id: 18,
      imageLink:
        'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg',
      title: 'Nhà dưới lòng đẩt',
      widthForItem: '40px',
    },
    {
      id: 19,
      imageLink:
        'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg',
      title: 'Khu cắm trại',
      widthForItem: '40px',
    },
    {
      id: 20,
      imageLink:
        'https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg',
      title: 'Nhà chung',
      widthForItem: '40px',
    },
    {
      id: 21,
      imageLink:
        'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
      title: 'Nhiệt dới',
      widthForItem: '40px',
    },
    {
      id: 22,
      imageLink:
        'https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg',
      title: 'Phục vụ bữa sáng',
      widthForItem: '40px',
    },
    {
      id: 23,
      imageLink:
        'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
      title: 'Các thành phố nổi tiêng',
      widthForItem: '40px',
    },
    {
      id: 24,
      imageLink:
        'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
      title: 'Nông thôn',
      widthForItem: '40px',
    },
    {
      id: 25,
      imageLink:
        'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg',
      title: 'Biệt thự',
      widthForItem: '40px',
    },
    {
      id: 27,
      imageLink:
        'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg',
      title: 'Trang trại',
      widthForItem: '40px',
    },
    {
      id: 28,
      imageLink:
        'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg',
      title: 'Nhà lịch sử',
      widthForItem: '40px',
    },
    {
      id: 29,
      imageLink:
        'https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg',
      title: 'Nhà phong cách Cycladic',
      widthForItem: '40px',
    },
    {
      id: 30,
      imageLink:
        'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
      title: 'Hướng biển',
      widthForItem: '40px',
    },
  ];
  const [activeId, setActiveId] = useState('TAB_8225');
  const [categoryList, setCategoryList] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(true);
  useEffect(() => {
    const timeIds = setInterval(() => {
      setCategoryList(navBarArr);
      setLoadingCategory(false);
    }, [1200]);
    return () => {
      clearInterval(timeIds);
    };
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 12, itemsToScroll: 4 },
  ];
  const handleGetIdItem = (id) => {
    if (activeId !== id) {
      setActiveId(id);
    }
  };
  const navBarRef = useRef();
  const navBarWrapperRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (document.documentElement.scrollTop === 0) {
        navBarRef.current.style.paddingTop = '20px';
        navBarRef.current.style.transition = 'all 0.1s linear';
        navBarWrapperRef.current.style.boxShadow = '';
      } else {
        navBarRef.current.style.paddingTop = '0';
        navBarRef.current.style.transition = 'all 0.1s linear';
        navBarWrapperRef.current.style.boxShadow =
          '0 1em 1em -1em rgba(0 0 0 / 15%)';
      }
    });
  }, []);

  return (
    <div className={cx('navbar-wrapper')} ref={navBarWrapperRef}>
      <div className={cx('container')}>
        <div className={cx('navbar-container')} ref={navBarRef}>
          <Carousel
            breakPoints={breakPoints}
            itemPadding={[0, 18]}
            enableSwipe={false}
            showEmptySlots={false}
          >
            {!loadingCategory &&
              categoryList.map((item) => (
                <Item
                  key={item.id}
                  className={cx({
                    active: activeId === item.id,
                  })}
                  onClick={() => handleGetIdItem(item.id)}
                >
                  <img src={item.imageLink} alt={item.title} />

                  <span className={cx('navbar-item-title')}>{item.title}</span>
                </Item>
              ))}
            {loadingCategory &&
              Array(16)
                .fill(0)
                .map((item, index) => (
                  <Item key={index}>
                    <Skeleton
                      variant="circular"
                      width="26px"
                      height="26px"
                      animation="wave"
                    ></Skeleton>
                    <span className={cx('navbar-item-title')}>
                      <Skeleton
                        variant="text"
                        width="60px"
                        animation="wave"
                      ></Skeleton>
                    </span>
                  </Item>
                ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
