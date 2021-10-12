import React from 'react'

import '../styles/blog-list.css'

const BlogList = ({ option }) => {
  return (
    <div className="blog-list col-md-12 py-3">
      <h1 className="blog-title">
      Apa Itu Design Pattern
      </h1>
      <p className="blog-body">
      Design pattern adalah solusi umum yang sering digunakan dalam pengembangan perangkat lunak. Design pattern adalah sebuah blue print yang…
      </p>
      <div className="option">
        { option }
      </div>
    </div>
  )
}

export default BlogList
