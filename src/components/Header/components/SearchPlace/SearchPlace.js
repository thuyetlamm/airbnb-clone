import React, { useEffect, useRef, useState } from 'react';
import './Searchplace.scss';
import useDebouned from '~/hooks/useDebouned';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper } from '~/components/Popper';
import { useDispatch } from 'react-redux';
import { setFiltersPlace } from '~/common/globalSlice';
SearchPlace.propTypes = {};

function SearchPlace(props) {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const [data, setData] = useState([]);
  const debounce = useDebouned(value, 500);
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        debounce
      )}.json?access_token=pk.eyJ1Ijoibmd0aGxhbTEwMSIsImEiOiJjbDZ2cnJrbjcwNGJxM2pwOXo0ZnNpOG1sIn0.nFvsw_dXW8zTkPeLmE_Ltw`
    )
      .then((response) => response.json())
      .then((data) => setData(data.features));
  }, [debounce]);

  const handleClickItem = (value) => {
    setValue(value);
    dispatch(setFiltersPlace(value));
    setOpen(false);
  };
  const handleClearValue = () => {
    setValue('');
    inputRef.current.focus();
  };
  return (
    <Tippy
      visible={data.length > 0 && open}
      placement="left-end"
      interactive
      appendTo={document.body}
      render={(attrs) => (
        <div className="search-poper" {...attrs}>
          <Wrapper>
            <ul className="search-result-list">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="search-result-item"
                  onClick={() => handleClickItem(item.place_name)}
                >
                  {item.place_name}
                </li>
              ))}
            </ul>
          </Wrapper>
        </div>
      )}
    >
      <div
        style={{
          display: 'flex',
          position: 'relative',
          minWidth: '120px',
        }}
      >
        <form className="search-form">
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Tìm kiếm điểm đến"
            className="search-input"
            autoFocus
            spellCheck={false}
          />
        </form>
        {value && open && (
          <span className="clear-btn" onClick={handleClearValue}>
            <HighlightOffIcon />
          </span>
        )}
      </div>
    </Tippy>
  );
}

export default SearchPlace;
