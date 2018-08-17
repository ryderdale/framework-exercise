import React, {Component} from 'react';



// function UpdateState (this) {
//     !this.state.showNewPostForm
// }

class NewPostForm extends Component {
    constructor(props) {
        super(props);
        //   updateState = updateState.bind(this)
        // console.log('Post props are:', props);
        console.log("access this state via", )
    } 
        
        render() {
            console.log(this.props)
            return (this.props.showNewPostForm ? (
                <form className="newPostForm form-group"> 
                    <label>Title</label>
                    <input type="text" className="form-control" name="title"/>
                    <label>Body</label>
                    <input type="text" className="form-control" name="body"/>
                    <label>Author</label>
                    <input type="text" className="form-control" name="author"/>
                    <label>Image URL</label>
                    <input type="text" className="form-control" name="imageURL"/>
                    <button type="submit" className="btn btn-primary newPost" id="createPostButton">Create Post</button>
                </form>
            ) : null);
        }
    
    
}

export default NewPostForm;
// export default UpdateState;