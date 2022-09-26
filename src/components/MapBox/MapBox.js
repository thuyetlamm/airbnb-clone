import React, { useEffect, useState } from 'react';
import Map, { Marker, Popup, GeolocateControl } from 'react-map-gl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './MapBox.scss';
import CustomNextArrows from '../NavigationBar/CustomNextArrows';
import CustomPrevArrows from '../NavigationBar/CustomPrevArrows';
function MapBox({ placeList, onChange }) {
  const [isShowPopup, setShowPopup] = useState(0);
  const [longTitude, setLongitude] = useState();
  const [laTitude, setLatitude] = useState();

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
  const arrImage = [
    {
      parentId: 1,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 2,
      totalImages: 4,
      images: [
        {
          id: 1,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-36165132/original/64a7e292-1cf6-4653-a6e3-75dd196038b7.jpeg?im_w=720',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 3,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://a0.muscache.com/im/pictures/11bd9fc9-4ca9-4208-b449-bdc63a1969b9.jpg?im_w=720',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 4,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 5,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg?im_w=720',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 6,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://a0.muscache.com/im/pictures/113bd9ea-b92c-4ab1-81cd-13825260e442.jpg?im_w=720',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 7,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://a0.muscache.com/im/pictures/3648aed7-f383-4b74-ab5d-f444e20a85f2.jpg?im_w=720',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 8,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://a0.muscache.com/im/pictures/a77b1c22-96cf-4ac0-a430-b5572c15df8a.jpg?im_w=720',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 9,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://a0.muscache.com/im/pictures/f6c46cce-0c0b-4ebc-ba01-3cce16527978.jpg?im_w=720',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 10,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 11,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://a0.muscache.com/im/pictures/miso/Hosting-45092774/original/16bb16ee-f7db-4afb-bd9e-092ef4aa3052.png?im_w=720',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 12,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 13,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 14,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 15,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      parentId: 16,
      totalImages: 3,
      images: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
  ];
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
