import React, {Component} from 'react';
import Contact from './Contact';
import { Consumer } from '../context'


class Contacts extends Component {

  deleteContent = id => this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)})

  render () {
    return (
      <Consumer>
        {value => {
          const { contacts } = value
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact 
                  key={contact.id}
                  contact={contact}
                  deleteHandler={this.deleteContent.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Contacts;
//Propriedade de Contact que será substituída pela chamada do reducer em Contact