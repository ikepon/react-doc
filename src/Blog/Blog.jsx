// @flow

import React from 'react';

class Blog extends React.Component {
  sidebar(posts) {
    return(
      <ul>
        {posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
  }

  content(posts) {
    return(
      posts.map((post) =>
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      )
    )
  }

  render() {
    return(
      <div>
        {this.sidebar(this.props.posts)}
        <hr />
        {this.content(this.props.posts)}
      </div>
    )
  }
}

export default Blog;
