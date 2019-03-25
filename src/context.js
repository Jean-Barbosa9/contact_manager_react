import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
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

  render () {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;