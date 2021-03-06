import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Consumer } from '../../context'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
  state = {
    showContactInfo: false
  }

  toggleShowContact = event => this.setState({showContactInfo: !this.state.showContactInfo})
  onDeleteClick = async (id, dispatch) => {

    // Just to simulate, cause jsonplaceholde doesn't succeed with delete request of new contacts
    try{
      await axios.delete(`//jsonplaceholder.typicode.com/users/${id}`)
      dispatch({type: 'DELETE_CONTACT', payload: id})
    }
    catch (e) {
      dispatch({type: 'DELETE_CONTACT', payload: id})
    }
  }

  render() {
    const {id, name, email, phone} = this.props.contact;

    //TODO: refatorar estilo inline por css apartado
    return (
      <Consumer>
        {value => {
          const { dispatch } = value

          return (
            <div className="card card-body mb-3">
              <h4 className="my-0" style={{padding: '0 10px',cursor: 'pointer'}} >
                <span
                  onClick={this.toggleShowContact}
                  style={{cursor: 'pointer'}}
                >{name}</span>  
                <i
                  className="fas fa-sort-down"
                  style={{padding: '0 10px',cursor: 'pointer'}}
                  onClick={this.toggleShowContact}
                ></i>
                <i className="fas fa-times text-danger align-middle float-right" style={{padding: '0 8px', cursor: 'pointer'}} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt float-right align-middle"
                    style={{
                      padding: '0 8px',
                      cursor: 'pointer',
                      color: '#999',
                      fontSize: '1.2rem'
                    }}
                  ></i>
                </Link>
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