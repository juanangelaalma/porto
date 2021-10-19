import React from 'react'

import stripHtml from '../../utils/stripHtml'
import '../styles/blog-list.css'

const BlogList = ({ post, option, handleDeletePost }) => {
  console.log(post.slug)
  return (
    <div className="blog-list col-md-12 py-3">
      <h1 className="blog-title">
      { post.title }
      </h1>
      <p className="blog-body">
      { stripHtml(post.body.slice(0, 300)) }...
      </p>
      <div className="option">
        <option.component handleDeletePost={handleDeletePost} post={post} />
      </div>
    </div>
  )
}

export default BlogList
