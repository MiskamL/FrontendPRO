
import React from "react";
import Posts from "./Posts";


class App extends React.Component {

  // state = {
  //   count: 0,
  //   inCouting: false,
  // }

  // handleStart = () => {
  //   this.setState({inCouting: true})

  //   this.timer = setInterval(() => {
  //     this.setState({count: this.state.count +1})
  //   }, 1000)
  // }

  // handleStop = () => {
  //   this.setState({inCouting: false})
  //   clearInterval(this.timer)
  // }

  // handleReset = () => {
  //   this.setState({inCouting: false, count: 0})
  //   clearInterval(this.timer)
  // }



  // componentDidMount() {
  //   const userCount = localStorage.getItem('count')
  //   if (userCount) {
  //     this.setState({count: +userCount})
  //   }
  // }

  // componentDidUpdate() {
  //   localStorage.setItem('count', this.state.count)
  // }

  state = {
    posts: [
      {id: '1', name: 'HTML/CSS'},
      {id: '2', name: 'JS'},
      {id: '3', name: 'REACT'},
    ],
  }

  handleDeletePost = (id) => {
    this.setState({posts: this.state.posts.filter(post => post.id !==id)})
  }

 render() {
  return (
    <div style={{textAlign: 'center'}}>
      <Posts posts={this.state.posts} cb={this.handleDeletePost}/>

    </div>
  )
 }
}
export default App;


