import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NewPostForm from './components/NewPostForm';
import Post from './components/Post';
import logo from './logo.svg';
import './App.css';
import postsData from './postsData';
import commentIcon from './comment-icon.png';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {UpdateSite} from './redux/actions'

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
        <NavBar/>
        <NewPostForm/>
        {postsData.map(post => <Post id="" key={post.id} commentIcon={commentIcon} img={post.imgURL} author={post.author} title={post.title} likesCount={post.likesCount} description={post.description} commentCount={post.commentCount} lastUpdatedDays = {post.lastUpdatedDays}/>)}
      </div>
    )
  }
}

//allows me to access my gloablState from combined reducers
function mapStateToProps(state) {
  return   {
    globalState: state.globalStateProp
  };
}

//allows me to update my global state from actions
function mapDispatchToProps (dispatch) {
  return bindActionCreators( {
    UpdateSite: UpdateSite
  }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);  



// toggle={() => this.toggleShowPostForm}
// showNewPostForm = {() => this.state.showNewPostForm} 


  // toggleShowPostForm () {
  //   console.log('I am toggling the state dammit.');
  //   this.setState({
  //     showNewPostForm: !this.state.showNewPostForm
  //   });
  // }