/* eslint-disable import/no-webpack-loader-syntax */
import React, { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MapBox.scss';

import CustomNextArrows from '../NavigationBar/CustomNextArrows';
import CustomPrevArrows from '../NavigationBar/CustomPrevArrows';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function MapBox({ placeList, onChange }) {
  const [isShowPopup, setShowPopup] = useState(0);

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '90vh',
    zoom: 6,
    longitude: 105.232323,
    latitude: 15.3434,
  });

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrows />,
    prevArrow: <CustomPrevArrows />,
    mobileFirst: true,
    draggable: true,
    appendDots: (dots) => <ul>{dots}</ul>,
  };

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     let long = position.coords.longitude;
  //     console.log(long);
  //   });
  // }
  const handleShowPopup = (id) => {
    setShowPopup(id);
  };
  const handleClickItem = (id) => {
    onChange(id);
  };
  return (
    <div className="map-box">
      <Map
        initialViewState={{ ...viewport }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxAccessToken={process.env.REACT_APP_TOKEN_ACCESS_KEY_MAP}
      >
        {placeList.data.map((placeItem) => (
          <>
            <Marker
              latitude={placeItem.attributes.latitude}
              longitude={placeItem.attributes.longtitude}
              offsetLeft={-20}
              offsetTop={-30}
              anchor="bottom"
              key={placeItem.id}
            >
              <span
                className="marker-place"
                onClick={() => handleShowPopup(placeItem.id)}
                style={
                  isShowPopup === placeItem.id
                    ? {
                        backgroundColor: 'var(--black)',
                        color: 'var(--white)',
                      }
                    : {
                        backgroundColor: 'var(--white)',
                        color: 'var(--black)',
                      }
                }
              >
                ${placeItem.attributes.priceOfPlace}
              </span>
            </Marker>

            {isShowPopup === placeItem.id && (
              <Popup
                latitude={placeItem.attributes.latitude}
                longitude={placeItem.attributes.longtitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setShowPopup(0)}
                anchor="top"
                styles={{ maxWidth: '324px' }}
              >
                <div
                  className="map-place-item"
                  onClick={() => handleClickItem(placeItem.id)}
                >
                  <Link to={`/rooms/${placeItem.id}`} target="_blank">
                    <Slider {...settings}>
                      {placeItem.attributes.images_urls.data.map((image) => (
                        <div className="map-place-item-img" key={image.id}>
                          <img src={image.attributes.imagesUrl} alt="homes" />
                        </div>
                      ))}
                    </Slider>
                    <div className="map-place-item-content">
                      <div className="map-place-item-decs">
                        <h1 className="map-place-item-name">
                          {placeItem.attributes.country}
                        </h1>
                        <span className="map-place-item-price">
                          <span>${placeItem.attributes.priceOfPlace}</span> đêm
                        </span>
                        <span className="map-place-item-datetime">
                          Ngày 14 - Ngày 19 tháng 8
                        </span>
                      </div>
                      <div className="map-place-item-rating">
                        <ion-icon name="star"></ion-icon>
                        <span>{placeItem.attributes.ratingVote}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </Popup>
            )}
          </>
        ))}
      </Map>
    </div>
  );
}

export default MapBox;
