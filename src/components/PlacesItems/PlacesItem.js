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
  const { placeList = [], onChange } = props;

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

  const handleClickPlaceItem = (placeItemId) => {
    if (onChange) {
      onChange(placeItemId);
    }
  };

  return (
    <div className="place-wrapper">
      {placeList.data?.map((item) => (
        <Link to={`/rooms/${item.id}`} target="_blank" key={item.id}>
          <div
            className="place-item"
            onClick={() => handleClickPlaceItem(item.id)}
          >
            <Slider {...settings}>
              {item.attributes.images_urls.data.map((image) => (
                <div className="place-item-img" key={image.id}>
                  <img src={image.attributes.imagesUrl} alt="homes" />
                </div>
              ))}
            </Slider>
            <div className="place-item-content">
              <div className="place-item-decs">
                <h1 className="place-item-name">{item.attributes.country}</h1>
                <p className="place-item-distance"> Cách 6.816 km</p>
                <p className="place-item-datetime">Ngày 14 - Ngày 19 tháng 8</p>
                <span className="place-item-price">
                  <span>${item.attributes.priceOfPlace}</span> đêm
                </span>
              </div>
              <div className="place-item-rating">
                <ion-icon name="star"></ion-icon>
                <span>{item.attributes.ratingVote}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PlacesItem;
