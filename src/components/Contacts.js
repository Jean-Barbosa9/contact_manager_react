import React, {Component} from 'react';
import Contact from './Contact';

class Contacts extends Component {

  state = {
    contacts: [
      {
        id: 1,
        name: 'John Smith',
        email: 'johnsth@gmail.com',
        phone: '(21) 98765-4321'
      },
      {
        id: 2,
        name: "Andrew Coulson",
        email: "ad_coulson@yahoo.com",
        phone: "(11) 99875-1234"
      },
      {
        id: 3,
        name: 'Fernanda Silva',
        email: 'fernanda_s@hotmail.com',
        phone: '(22) 2255-3344'
      },
      {
        id: 4,
        name: "Juliana Guimarães",
        email: "jumaraes@gmail.com",
        phone: "(51) 3567-0607"
      }
    ]
  }

  deleteContent = id => this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)})

  render() {
    const {contacts} = this.state;

    return(
      <React.Fragment>
        {contacts.map(contact => (<Contact key={contact.id} contact={contact} deleteHandler={this.deleteContent.bind(this, contact.id)} />))}
      </React.Fragment>
    )
  }
}

export default Contacts;
