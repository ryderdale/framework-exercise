import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NewPostForm from './components/NewPostForm';
import Post from './components/Post';
import logo from './logo.svg';
import './App.css';
import postsData from './postsData';
import commentIcon from './comment-icon.png';

class App extends Component {

    

  constructor() {
    super()
    this.state = {
      showNewPostForm: false
    } 
  }



  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <NavBar parentState={this}/>
        <NewPostForm showNewPostForm={this.state.showNewPostForm}/>
        {postsData.map(post => <Post id="" key={post.id} commentIcon={commentIcon} img={post.imgURL} author={post.author} title={post.title} likesCount={post.likesCount} description={post.description} commentCount={post.commentCount} lastUpdatedDays = {post.lastUpdatedDays}/>)}
      </div>
    )
  }
}

export default App;

// toggle={() => this.toggleShowPostForm}
// showNewPostForm = {() => this.state.showNewPostForm} 


  // toggleShowPostForm () {
  //   console.log('I am toggling the state dammit.');
  //   this.setState({
  //     showNewPostForm: !this.state.showNewPostForm
  //   });
  // }