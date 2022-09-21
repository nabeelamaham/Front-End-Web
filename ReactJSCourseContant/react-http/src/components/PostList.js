import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg: ''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response =>{
            console.log(Response)
            this.setState({posts: Response.data})
        })
        .catch(error =>{
            console.log(Object)
            this.setState({errorMsg : 'error retriving data'})
        })
    }
  render() {
    const {posts, errorMsg} = this.state
    return (
      <div>
        List of Post
        {
            posts.length ?
            posts.map(posts => <div key={posts.id}>{posts.title}</div>) :
            null 
        }
        { errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    )
  }
}

export default PostList
