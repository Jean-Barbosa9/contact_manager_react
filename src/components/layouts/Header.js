import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = props => {
  const {branding} = props;

  return (
    <header className="header ">
      <nav className="menu navbar navbar-expand-sm navbar-dark mb-3 py-0" style={{backgroundColor: '#61DAFB'}}>
        <div className="container">
          <a className="menu__link navbar-brand" style={{color: '#000000'}} href="/">{branding}</a>
          <ul className="menu__list navbar-nav mr-auto">
            <li className="menu__item nav-item">
              <a className="menu__link nav-link" style={{color: '#000000'}} href="/">Home</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

Header.defaultProps = {
  branding: 'My app'
}

export default Header;
