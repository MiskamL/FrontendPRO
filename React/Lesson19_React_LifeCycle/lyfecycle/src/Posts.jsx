import React from "react";
import Post from "./Post";

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} cb={cb}/>)}
        </div>
    )
}
export default Posts;