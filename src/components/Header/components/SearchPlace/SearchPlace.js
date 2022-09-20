import React, { useEffect, useRef, useState } from 'react';
import './Searchplace.scss';
import useDebouned from '~/hooks/useDebouned';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper } from '~/components/Popper';
SearchPlace.propTypes = {};

function SearchPlace(props) {
  const [value, setValue] = useState('');
  const inputRef = useRef();
  const [data, setData] = useState([]);
  const debounce = useDebouned(value, 500);
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        debounce
      )}.json?access_token=pk.eyJ1Ijoibmd0aGxhbTEwMSIsImEiOiJjbDZ2cnJrbjcwNGJxM2pwOXo0ZnNpOG1sIn0.nFvsw_dXW8zTkPeLmE_Ltw`
    )
      .then((response) => response.json())
      .then((data) => setData(data.features));
  }, [debounce]);
  return (
    <Tippy
      visible={data.length > 0}
      placement="left-end"
      interactive
      appendTo={document.body}
      render={(attrs) => (
        <div className="search-poper" {...attrs}>
          <Wrapper>
            <ul className="search-result-list">
              {data.map((item, index) => (
                <li key={index} className="search-result-item">
                  {item.place_name}
                </li>
              ))}
            </ul>
          </Wrapper>
        </div>
      )}
    >
      <form className="search-form">
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Tìm kiếm điểm đến"
          className="search-input"
        />
      </form>
    </Tippy>
  );
}

export default SearchPlace;
