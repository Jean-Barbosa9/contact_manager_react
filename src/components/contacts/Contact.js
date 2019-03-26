import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context'

import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
  state = {
    showContactInfo: false
  }

  onDeleteClick = (id, dispatch) => dispatch({type: 'DELETE_CONTACT', payload: id})

  render() {
    const {id, name, email, phone} = this.props.contact;

    //TODO: refatorar estilo inline por css apartado
    return (
      <Consumer>
        {value => {
          const { dispatch } = value

          return (
            <div className="card card-body mb-3">
              <h4 className="my-0">
                {name}
                <i className="fas fa-sort-down"
                  style={{padding: '0 10px',cursor: 'pointer'}}
                  onClick={event => {
                      this.setState({showContactInfo: !this.state.showContactInfo})
                      if(!this.state.showContactInfo) {event.target.style.transform = 'rotate(180deg) translateY(-50%)'}else{event.target.style.transform = ''}
                    }
                }></i>
                <i className="fas fa-times text-danger align-middle float-right"  style={{cursor: 'pointer'}} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
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
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired, 
}

export default Contact;