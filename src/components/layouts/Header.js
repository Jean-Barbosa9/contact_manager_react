import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = props => {
  const {branding} = props;

  return (
    <header className="header">
      <nav className="menu navbar navbar-expand-sm navbar-dark mb-3 py-0" style={{backgroundColor: '#61DAFB'}}>
        <div className="container">
          <a className="menu__link navbar-brand" style={{color: '#000000'}} href="/">{branding}</a>
          <ul className="menu__list navbar-nav">
            <li className="menu__item nav-item">
              <Link to="/" className="menu__link nav-link" style={{color: '#000000'}}>
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
            <li className="menu__item nav-item">
              <Link to="/contact/add" className="menu__link nav-link" style={{color: '#000000'}}>
                <i className="fas fa-plus"></i>
                Add
              </Link>
            </li>
            <li className="menu__item nav-item">
              <Link to="/about" className="menu__link nav-link" style={{color: '#000000'}}>
                <i className="fas fa-question"></i>
                About
              </Link>
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
