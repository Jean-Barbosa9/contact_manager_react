import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = props => {
  const {branding} = props;

  return (
    <header className="header">
      <h1>{branding}</h1>
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
