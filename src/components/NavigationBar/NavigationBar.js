import React, { useState, useRef, useEffect, useMemo } from 'react';
import Carousel from 'react-elastic-carousel';
import styles from './NavigationBar.module.scss';
import classNames from 'classnames/bind';
import Item from 'antd/lib/list/Item';
import categoryApi from '~/api/categoryApi';
import Skeleton from '@mui/material/Skeleton';
const cx = classNames.bind(styles);

function NavigationBar(props) {
  const { ischangeView, onChange } = props;

  const [activeId, setActiveId] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(true);
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const category = await categoryApi.getAll({
          populate: '*',
        });
        const result = await shuffle(category);
        setCategoryList(result);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchCategory();
    setLoadingCategory(false);
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 12, itemsToScroll: 4 },
  ];

  const handleGetIdItem = (id) => {
    if (onChange) {
      onChange(id);
    }
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
        <div
          className={cx('navbar-container', {
            category: !ischangeView,
          })}
          ref={navBarRef}
        >
          {console.log('re-render')}
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
                    active: item.id === (activeId || categoryList[0].id),
                  })}
                  onClick={() => handleGetIdItem(item.id)}
                >
                  <img
                    src={item.attributes.imageUrl}
                    alt={item.attributes.title}
                  />

                  <span className={cx('navbar-item-title')}>
                    {item.attributes.title}
                  </span>
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
