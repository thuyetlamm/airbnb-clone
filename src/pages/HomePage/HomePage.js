import classNames from 'classnames/bind';
import React from 'react';
import Header from '~/components/Header/Header';
import styles from './HomePage.module.scss';
const cx = classNames.bind(styles);
HomePage.propTypes = {};

function HomePage(props) {
  return (
    <>
      <Header />

      <div className={cx('container')}>
        <div className={cx('content')}>hehhehe</div>
      </div>
    </>
  );
}

export default HomePage;
