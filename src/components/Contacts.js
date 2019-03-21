import React from, {Component} 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

class Contacts extendes Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Smith',
          email: 'johnsth@gmail.com',
          phone: '(21) 98765-4321'
        },
        {
          id: 2,
          name="Andrew Coulson",e
          mail="ad_coulson@yahoo.com",
          phone="(11) 99875-1234"
        },
        {
          id: 3,
          name: 'Fernanda Silva',
          email: 'fernanda_s@hotmail.com',
          phone: '(22) 2255-3344'
        },
        {
          id: 4,
          name="Juliana Guimarães",
          mail="jumaraes@gmail.com",
          phone="(51) 3567-0607"
        }
      ]
    }
  }
  render() {
    const {contacts} = this.state;

    return(
      <div>
        
      </div>
    )
  }
}

export default Contacts;
