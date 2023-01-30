import React from "react";

const Post = ({post, cb}) => {
    return (
        <div>
            <h3 style={{displey: 'inline-block', marginRight: 20}}>{post.name}</h3>
            <button onClick={cb}>delete</button>
        </div>
    )
}
export default Post;