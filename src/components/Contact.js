import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
  state = {
    showContactInfo: false
  }
  render() {
    const {name, email, phone} = this.props.contact;

    return(
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i className="fas fa-sort-down" style={{margin: '0 5px'}} onClick={event => {this.setState({showContactInfo: !this.state.showContactInfo})}}></i>
        </h4>
        {this.state.showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>) :
          null
        }
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;
