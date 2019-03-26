import React from 'react'
import PropTypes from 'prop-types'

const TextInputGroup = ({label, type, name, placeholder, value, onChange, required}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input 
        type={type}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}

TextInputGroup.defaultProps = {
  type: 'text',
  required: false
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired
}

export default TextInputGroup;