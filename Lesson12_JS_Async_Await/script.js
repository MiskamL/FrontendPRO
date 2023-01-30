const postID = 29


// fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
//     .then(data => data.json())
//     .then(post => {
//         fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//             .then(data => data.json())
//             .then(user => console.log.apply(user.name))
//     })

const getUserNameByPostID = async (postID) => {
    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        // .then(data => data.json())
    const post = await postRequest.json()

    const userRequest = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)

    const user = await userRequest.json()

    return user.name
}
getUserNameByPostID(postID).then(data => console.log(data))


const getPostAndCommentTextByCommentID = async (commentID) => {
    const comment = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentID}`).then(data => data.json())

    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${comment.postId}`).then(data => data.json())

    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then(data => data.json())

    console.log(`   comment: ${comment.body}
    post: ${post.body}
    author: ${user.name}`)
}

getPostAndCommentTextByCommentID(33)
