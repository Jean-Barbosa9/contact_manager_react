import React, { Component } from 'react'
import { Consumer } from '../../context'
import uuid from 'uuid'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    showForm: false
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state
    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        id: uuid(),
        name,
        email,
        phone
      }
    })

    this.setState({
      name: '',
      email: '',
      phone: '',
    })
  }

  render() {
    const { name, email, phone } = this.state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className='card mb-3'>
              <div 
                className="card-header"
                style={{cursor: 'pointer'}}
                onClick={event => {
                    this.setState({showForm: !this.state.showForm})
                    /*
                      if(!this.state.showForm) {event.target.style.transform = 'rotate(180deg) translateY(-50%)'}else{event.target.style.transform = ''}
                      aguardando para aprender em como mexer nos nós filhos, pois a ideia é rotacionar apenas o ícone
                    */
                  }
                }
              >
                Add Contact
                <i className="fas fa-sort-down float-right" style={{padding: '0 10px'}}></i>
              </div>
              {this.state.showForm ? (
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Name: </label>
                      <input 
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Enter name..."
                        value={name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emai">Email: </label>
                      <input 
                        type="text"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Enter email..."
                        value={email}
                        onChange={this.onChange}                
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone: </label>
                      <input 
                        type="text"
                        name="phone"
                        className="form-control form-control-lg"
                        placeholder="Enter phone..."
                        value={phone}
                        onChange={this.onChange}
                      />
                    </div>
                    <input type="submit" className="btn btn-light btn-block" value="Add Contact"/>
                  </form>
                </div>
              )
              :
              null}
              
            </div>
          )
        }}
      </Consumer>
      )
    }
  }
  
  export default AddContact;