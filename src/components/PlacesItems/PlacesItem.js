import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PlacesItem.scss';
import { Link } from 'react-router-dom';
import CustomNextArrows from '../NavigationBar/CustomNextArrows';
import CustomPrevArrows from '../NavigationBar/CustomPrevArrows';
PlacesItem.propTypes = {};

function PlacesItem(props) {
  const { arrImage } = props;

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrows />,
    prevArrow: <CustomPrevArrows />,
    mobileFirst: true,
    draggable: false,
    appendDots: (dots) => <ul>{dots}</ul>,
  };

  return (
    <div className="place-wrapper">
      {arrImage.map((item) => (
        <div className="place-item" key={item.parentId}>
          <Link to="/rooms">
            <Slider {...settings}>
              {item.images.map((image) => (
                <div className="place-item-img" key={image.id}>
                  <img src={image.url} alt="homes" />
                </div>
              ))}
            </Slider>
            <div className="place-item-content">
              <div className="place-item-decs">
                <h1 className="place-item-name">Dangar IsLand , UC</h1>
                <p className="place-item-distance"> Cách 6.816 km</p>
                <p className="place-item-datetime">Ngày 14 - Ngày 19 tháng 8</p>
                <span className="place-item-price">
                  <span>$169</span> đêm
                </span>
              </div>
              <div className="place-item-rating">
                <ion-icon name="star"></ion-icon>
                <span>4.9</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PlacesItem;
