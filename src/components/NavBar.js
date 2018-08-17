import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {UpdateSite} from '../redux/actions'
// import updateState from 'NewPostForm'

class NavBar extends Component {
    constructor(props) {
        super(props);
        console.log('Post props are:', props);
    }

    render() {
        return (
            <div className="navBar"> 
                <div className="rightSideNav">
                    <input type="text" placeholder="filter"/>
                    <div className="dropdown">
                        <div className="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort By</div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Sort By Votes</button>
                            <button className="dropdown-item" type="button">Sort By Date</button>
                        </div>
                    </div>
                </div>
                {console.log()}
              <button className="btn btn-primary newPost" onClick={()=>this.props.UpdateSite({showNewPostForm: !this.props.globalState.showNewPostForm})}>New Post</button>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar);  


{/* <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Sort By Votes</a>
                </div>
                 */}