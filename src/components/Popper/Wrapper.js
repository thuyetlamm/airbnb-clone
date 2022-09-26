import React from 'react';
import './Wrapper.scss';
function Wrapper({ children }) {
  return <div className="wrapper-custom">{children}</div>;
}

export default Wrapper;
