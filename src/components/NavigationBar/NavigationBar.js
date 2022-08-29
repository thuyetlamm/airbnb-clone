import React, { useState, useRef, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import styles from './NavigationBar.module.scss';
import classNames from 'classnames/bind';
import Item from 'antd/lib/list/Item';
import categoryApi from '~/api/categoryApi';
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from 'react-router-dom';
const qs = require('qs');
const cx = classNames.bind(styles);
NavigationBar.propTypes = {};

function NavigationBar(props) {
  const { ischangeView, filters = {}, onChange } = props;
  const navigation = useNavigate();
  const [activeId, setActiveId] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(true);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const category = await categoryApi.getAll();
        setCategoryList(category);
      } catch (error) {
        throw new Error(error);
      }
      setLoadingCategory(false);
    };
    fetchCategory();
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 12, itemsToScroll: 4 },
  ];
  useEffect(() => {
    navigation(`/placelists/?${qs.stringify(filters)}`);
  }, [filters]);

  const handleGetIdItem = (id) => {
    if (onChange) {
      onChange(id);
    }
    if (activeId !== id) {
      setActiveId(id);
    }

    navigation(`/placelists/?${qs.stringify(filters)}`);
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
