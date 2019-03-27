import React from 'react'
import { version } from '../../../package.json'

export default function About() {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version: {version}</p>
    </div>
  )
}
