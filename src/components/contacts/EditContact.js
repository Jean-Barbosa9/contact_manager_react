import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layouts/TextInputGroup'
import axios from 'axios';

class AddContact extends Component {
  state = {
    id: this.props.match.params.id,
    name: '',
    email: '',
    phone: '',
    showForm: true,
    errors: {}
  }

  async componentDidMount () {
    const { id } = this.state
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
    const {name, email, phone} = res.data
    this.setState({name, email, phone})
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { id, name, email, phone} = this.state
    
    if(name === '') {
      this.setState({errors: {name: 'Name is required'}})
      return;
    }
    if(email === '') {
      this.setState({errors: {email: 'Email is required'}})
      return;
    }
    if(phone === '') { 
      this.setState({errors: {phone: 'Phone is required'}})
      return;
    }

    const res = await axios.put(`http://jsonplaceholder.typicode.com/users/${id}`, {name,email,phone})
    dispatch({type: 'UPDATE_CONTACT', payload: res.data})

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })

    // It would be nice if it had a loading here

    // Redirects to home
    this.props.history.push('/')
  }

  render() {
    const { name, email, phone, errors } = this.state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className='card mb-3'>
              <div 
                className="card-header"
                style={{cursor: 'pointer'}}
                /*
                onClick={event => {
                    this.setState({showForm: !this.state.showForm})
                      if(!this.state.showForm) {event.target.style.transform = 'rotate(180deg) translateY(-50%)'}else{event.target.style.transform = ''}
                      aguardando para aprender em como mexer nos nós filhos, pois a ideia é rotacionar apenas o ícone
                }}
                Esse ícone na verdade deve ser adicionado após o texto "Add Contact". Estou vendo uma forma melhor de fazer isso, por conta de agora estar usando o BrowserRouter
                <i className="fas fa-sort-down float-right" style={{padding: '0 10px'}}></i>
                */
              >
                Edit Contact
              </div>
              {this.state.showForm ? (
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup 
                      label="Name: "
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter name..."
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup 
                      label="Email: "
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter email..."
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <TextInputGroup 
                      label="Phone: "
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter phone..."
                      value={phone}
                      onChange={this.onChange}
                      error={errors.phone}
                    />
                    <input type="submit" className="btn btn-light btn-block" value="Update Contact"/>
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