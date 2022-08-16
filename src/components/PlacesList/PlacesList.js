import React, { useState, useEffect } from 'react';

import styles from './PlacesList.module.scss';
import classNames from 'classnames/bind';
import PlacesItem from '~/components/PlacesItems/PlacesItem';
import PlacesItemSkeleton from '~/components/PlacesItems/PlacesItemSkeleton';
const cx = classNames.bind(styles);
PlacesList.propTypes = {};

function PlacesList(props) {
  const [loadingPlaceList, setLoadingPlaceList] = useState(true);
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
  useEffect(() => {
    const timeIds = setInterval(() => {
      setLoadingPlaceList(false);
    }, [1200]);
    return () => {
      clearInterval(timeIds);
    };
  }, []);
  return (
    <div className={cx('container')}>
      {!loadingPlaceList && <PlacesItem arrImage={arrImage} />}
      {loadingPlaceList && <PlacesItemSkeleton length={12} />}
    </div>
  );
}

export default PlacesList;
