import React, { useEffect, useMemo } from 'react';
import './CountFeature.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as WrapperCount } from '~/components/Popper/index';
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
  totalCount,
} from '~/components/features/Counter/counterSlice';
function CountFeature() {
  const indexActive = useSelector((state) => state.globalState.activeId);
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    const countTotal = count.countBig + count.countMid + count.countSmall;
    dispatch(totalCount(countTotal));
  }, [count.countBig, count.countMid, count.countSmall]);
  return (
    <Tippy
      visible={indexActive === 3}
      placement="bottom-end"
      interactive
      appendTo={document.body}
      render={(attrs) => (
        <div className="count-popper" {...attrs}>
          <WrapperCount>
            <div>
              <ul className="count-popper-list">
                <li className="count-popper-item">
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
                <li className="count-popper-item">
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
                <li className="count-popper-item">
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
                <li className="count-popper-item">
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
                    <button onClick={() => dispatch(increateAnimal())}>
                      +
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </WrapperCount>
        </div>
      )}
    >
      <div>{count.totalCount ? `${count.totalCount} khách` : 'Thêm khách'}</div>
    </Tippy>
  );
}

export default CountFeature;
