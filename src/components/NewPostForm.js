import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {UpdateSite} from '../redux/actions'



// function UpdateState (this) {
//     !this.state.showNewPostForm
// }

class NewPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {title: ''};
        this.operator2 = this.operator2.bind(this);
        this.validationOperator = this.validationOperator.bind(this);


        //   updateState = updateState.bind(this)
        // console.log('Post props are:', props);
        console.log("access this state via", )

    } 

    operator(event) {
        event.preventDefault();
        console.log(event.target)
    }

    operator2() {
        console.log(this.state.title)
    };

    validationOperator(event) {
        this.setState({title: event.target.value});
        console.log(event.target.value);
        //add validation logic to event.target.value
    }
        
        render() {
            console.log(this.props)
            return (this.props.globalState.showNewPostForm? (
                <form onSubmit={this.operator} className="newPostForm form-group"> 
                    <label>Title</label>
                    {/* //remove title: */}
                    <input type="text" className="form-control" name="title" value={this.state.title} onChange={event=>this.validationOperator(event)}/>
                    <label>Body</label>
                    <input type="text" className="form-control" name="body"/>
                    <label>Author</label>
                    <input type="text" className="form-control" name="author"/>
                    <label>Image URL</label>
                    <input type="text" className="form-control" name="imageURL"/>
                    <button type="submit" className="btn btn-primary newPost" id="createPostButton" onClick={this.operator2}>Create Post</button>
                </form>
            ) : null);
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);  
// export default UpdateState;