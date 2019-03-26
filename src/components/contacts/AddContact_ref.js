import React, { Component } from 'react'

class AddContact extends Component {
  constructor (props) {
    super (props)
    this.inputName = React.createRef()
    this.inputEmail = React.createRef()
    this.inputPhone = React.createRef()
  }
  
  state = {
    showForm: false
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.inputName.current.value,
      email: this.inputEmail.current.value,
      phone: this.inputPhone.current.value
    }
    console.log(contact)
  }

  static defaultProps = {
    name: 'John Michael',
    email: 'john_mik@gmail.com',
    phone: '(21) 9 9876-5432'
  }

  render() {
    const { name, email, phone } = this.props
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
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input 
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter name..."
                  defaultValue={name}
                  ref={this.inputName}
                />
              </div>
              <div className="form-group">
                  <label htmlFor="emai">Email: </label>
                <input 
                  type="text"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter email..."
                  defaultValue={email}
                  ref={this.inputEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone: </label>
                <input 
                  type="text"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter phone..."
                  defaultValue={phone}
                  ref={this.inputPhone}
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
    }
  }
  
  export default AddContact;