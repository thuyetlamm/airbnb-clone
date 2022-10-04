import React, { useEffect, useRef, useState } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { useDispatch } from 'react-redux';
import { setFiltersPlace } from '~/common/globalSlice';
import useDebouned from '~/hooks/useDebouned';
import './SearchPlaceOnMobile.scss';

function SearchPlaceOnMobile(props) {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const debounce = useDebouned(value, 500);
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
    setOpen(false);
    dispatch(setFiltersPlace(value));
  };
  const handleClearValue = () => {
    setValue('');
    inputRef.current.focus();
  };
  const handleInputChange = (e) => {
    setValue(e.target.value);
    setOpen(true);
  };
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        minWidth: '120px',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <form className="search-form-mobile">
        <span className="search-icon-mobile">
          <ion-icon name="search"></ion-icon>
        </span>
        <input
          ref={inputRef}
          value={value}
          onChange={handleInputChange}
          placeholder="Tìm kiếm điểm đến"
          className="search-input-mobile"
          autoFocus
          type="text"
          spellCheck={false}
        />
        {value && open && (
          <span className="clear-btn-mobile" onClick={handleClearValue}>
            <HighlightOffIcon />
          </span>
        )}
      </form>
      {open && (
        <ul className="search-list-mobile">
          {data.map((data) => (
            <li
              key={data.place_name}
              onClick={() => handleClickItem(data.place_name)}
            >
              <span>
                <ion-icon name="location-outline"></ion-icon>
              </span>
              <span>{data.place_name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchPlaceOnMobile;
