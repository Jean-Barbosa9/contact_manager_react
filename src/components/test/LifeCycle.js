import React, { Component } from 'react'

class LifeCycle extends Component {
  state = {
    description: 'Component used as reference to life cycle methods notes.',
    title: '',
    body: ''
  }

  componentDidMount () {
    console.log("componentDidMount will fires after the actual component had fished to be mounted");
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({title: data.title, body: data.body}))
  }

  // UNSAFE_componentWillMount () {
  //   console.log("componentWillMount will fires before the actual component starts to be mounted. Had deprecated, but it's still possible continue using it by UNSAFE_ prefix.");
  // }

  componentDidUpdate () {
    console.log("componentDidUpdate will fires after the actual component had fished to be updated");
  }

  // UNSAFE_componentWillUpdate () {
  //   console.log("componentWillUpdate will fires before the actual component starts to be updated. Had deprecated, but it's still possible continue using it by UNSAFE_ prefix.");
  // }

  // UNSAFE_componentWillReceiveProps (nextProps, nextState) {
  //   console.log("componentWillReceiveProps will fires before the actual component receive new props from Redux, for example. Had deprecated, but it's still possible use static getDerivedStateFromProps(nextProps, prevState) instead. ");
  // }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps must return something eighther null values, but itsn't possible use this.setState to update the state. Must return the whole new state, with changes.");
    return null
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("It returns de DOM state, to track scroll position while the DOM updates. Example: https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705#aff1");
  }

  render() {
    return (
      <div>
        <h1 className="display-3">React life cycle methods</h1>
        <p className="lead">
          Read more about each one of them at:
          <a href="https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705">Understanding life cycle methods React 16.3</a>, <a href="https://reactjs.org/">React docs</a>
          <br/>
          <span className="text-danger"> OR </span>
          <br/>
          Press <strong>ctrl+shift+i</strong> to see it's summed up into console log.
        </p>
        <h2 className="display-4">componentDidMount sample</h2>
        <h3>{this.state.title}</h3>
        <p>{this.state.body}</p>
      </div>
    )
  }
}

export default LifeCycle
