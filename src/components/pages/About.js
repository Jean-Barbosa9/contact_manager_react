import React from 'react'
import { version } from '../../../package.json'

export default function About(props) {
  const name = props.match.params.name
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      {name ? (
        <React.Fragment>
          <p className="lead">Hello {name}, it's a simple app to manage contacts</p>
          <p className="text-secondary">Version: {version}</p>  
        </React.Fragment>
        ):(
        <React.Fragment>
          <p className="lead">Simple app to manage contacts</p>
          <p className="text-secondary">Version: {version}</p>
        </React.Fragment>
      )}
    </div>
  )
}
