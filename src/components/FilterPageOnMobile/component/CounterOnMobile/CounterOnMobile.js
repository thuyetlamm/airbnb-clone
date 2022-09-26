import React from 'react';
import PropTypes from 'prop-types';
import './CounterOnMobile.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreateAnimal,
  decreateBig,
  decreateMid,
  decreateSmall,
  increateAnimal,
  increateBig,
  increateMid,
  increateSmall,
} from '~/components/features/Counter/counterSlice';
CounterOnMobile.propTypes = {};

function CounterOnMobile(props) {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="count-mobile">
      <ul className="count-popper-list">
        <li className="count-item-mobile">
          <div>
            <h4>Người lớn</h4>
            <p>Từ 13 tuổi trở lên</p>
          </div>
          <div>
            <button
              className={`${count.countBig === 1 && 'disabled'}`}
              onClick={() => dispatch(decreateBig())}
            >
              -
            </button>
            {count.countBig}
            <button onClick={() => dispatch(increateBig())}>+</button>
          </div>
        </li>
        <li className="count-item-mobile">
          <div>
            <h4>Trẻ em</h4>
            <p>Độ tuổi 2-12 tuổi</p>
          </div>
          <div>
            <button
              className={`${count.countMid === 0 && 'disabled'}`}
              onClick={() => dispatch(decreateMid())}
            >
              -
            </button>
            {count.countMid}
            <button onClick={() => dispatch(increateMid())}>+</button>
          </div>
        </li>
        <li className="count-item-mobile">
          <div>
            <h4>Em bé</h4>
            <p>Dưới 2 tuổi</p>
          </div>
          <div>
            <button
              className={`${count.countSmall === 0 && 'disabled'}`}
              onClick={() => dispatch(decreateSmall())}
            >
              -
            </button>
            {count.countSmall}
            <button onClick={() => dispatch(increateSmall())}>+</button>
          </div>
        </li>
        <li className="count-item-mobile">
          <div>
            <h4>Thú cưng</h4>
            <p>Bạn sẽ mang theo động vật phục vụ?</p>
          </div>
          <div>
            <button
              className={`${count.countAnimal === 0 && 'disabled'}`}
              onClick={() => dispatch(decreateAnimal())}
            >
              -
            </button>
            {count.countAnimal}
            <button onClick={() => dispatch(increateAnimal())}>+</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CounterOnMobile;
