import React, {Component} from 'react';
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
              <button className="btn btn-primary newPost" onClick={()=>{console.log(this.props.parentState.state.showNewPostForm); this.props.parentState.setState({showNewPostForm: !this.props.parentState.state.showNewPostForm})}} >New Post</button>
            </div>
        )
    }
}
// onClick={updateState(this)}
export default NavBar;


{/* <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Sort By Votes</a>
                </div>
                 */}