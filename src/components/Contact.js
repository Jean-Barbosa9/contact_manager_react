import React, {Component} from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
  state = {
    showContactInfo: false
  }

  onDeleteClick = () => {
    this.props.deleteHandler()
  }

  render() {
    const {name, email, phone} = this.props.contact;
    //TODO: refatorar estilo inline por css apartado
    return(
      <div className="card card-body mb-3">
        <h4 className="my-0">
          {name}
          <i className="fas fa-sort-down"
            style={{margin: '0 5px',cursor: 'pointer'}}
            onClick={event => {
                this.setState({showContactInfo: !this.state.showContactInfo})
                if(!this.state.showContactInfo) {event.target.style.transform = 'rotate(180deg) translateY(-50%)'}else{event.target.style.transform = ''}
              }
          }></i>
          <i className="fas fa-times text-danger align-middle float-right"  style={{cursor: 'pointer'}} onClick={this.onDeleteClick}></i>
        </h4>
        {this.state.showContactInfo ?
          (
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          )
        :
          null
        }
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired, 
  deleteHandler: PropTypes.func.isRequired
}

export default Contact;
