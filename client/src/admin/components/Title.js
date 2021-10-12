import React from 'react'

import '../styles/title.css'

const Title = ({ children }) => {
  return (
    <h1 className="title">
      { children }
    </h1>
  )
}

export default Title
