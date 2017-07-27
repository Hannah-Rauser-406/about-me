import React from 'react';
import './styles.css';

const Header = (props) => {
  return(
    <div className="header">
      <h1>{ props.title }</h1>
      <h3>{ props.headerMsg }</h3>
    </div>

  )
}

export default Header;
