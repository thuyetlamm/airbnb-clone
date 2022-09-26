import React, { useState, useRef, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import styles from './NavigationBar.module.scss';
import classNames from 'classnames/bind';
import Item from 'antd/lib/list/Item';
import categoryApi from '~/api/categoryApi';
import Skeleton from '@mui/material/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoading } from './categorySlice';
const cx = classNames.bind(styles);

function NavigationBar(props) {
  const { ischangeView, onChange } = props;
  const [activeId, setActiveId] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [distance, setDistance] = useState(0);
  const dispatch = useDispatch();
  const loadingGlobal = useSelector((state) => state.category);
  const navBarRef = useRef();
  const navBarWrapperRef = useRef();
  // const randomCategory = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 12, itemsToScroll: 4 },
  ];

  useEffect(() => {
    (async () => {
      try {
        dispatch(toggleLoading(true));
        const category = await categoryApi.getAll();
        setCategoryList(category);
      } catch (error) {
        throw new Error(error);
      }
    })();
    const timeIds = setTimeout(() => {
      dispatch(toggleLoading(false));
    }, 1300);
    return () => {
      clearTimeout(timeIds);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (document.documentElement.scrollTop === 0) {
        navBarRef.current.style.paddingTop = '30px';

        navBarRef.current.style.transition = 'all 0.1s linear';
        navBarWrapperRef.current.style.boxShadow = '';
      } else {
        navBarRef.current.style.paddingTop = '0';
        navBarRef.current.style.transition = 'all 0.1s linear';
        navBarWrapperRef.current.style.boxShadow =
          '0 1em 1em -1em rgba(0 0 0 / 15%)';
      }
      setDistance(document.documentElement.scrollTop);
    });
  }, []);

  const handleGetIdItem = (id) => {
    if (onChange) {
      onChange(id);
    }
    if (activeId !== id) {
      setActiveId(id);
    }
    if (distance > 0) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  return (
    <div className={cx('navbar-wrapper')} ref={navBarWrapperRef}>
      <div className={cx('container')}>
        <div
          className={cx('navbar-container', {
            category: !ischangeView,
          })}
          ref={navBarRef}
          style={
            !ischangeView && {
              height: '80px',
              marginTop: '-2px',
              paddingTop: '0!important',
            }
          }
        >
          <Carousel
            breakPoints={breakPoints}
            itemPadding={[0, 18]}
            enableSwipe={false}
            showEmptySlots={false}
            draggable
          >
            {!loadingGlobal.loading &&
              categoryList.data?.map((item) => (
                <Item
                  key={item.id}
                  className={cx({
                    active: item.id === activeId,
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
            {loadingGlobal.loading &&
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

export default React.memo(NavigationBar);
