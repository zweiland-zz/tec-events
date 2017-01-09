import React from 'react'
import { Link } from 'react-router'

var Post = React.createClass({
  render: function() {
    console.log("Post");
    return (
      <div className="post">
        Posts!
      </div>
    );
  },
});

export default Post
