import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props)
        console.log('Post props are:', props);
    }

    render() {
        return (
            <div className="post-container ">
                <img className="" src={this.props.img}/>
                {/* <img className="" src="https://source.unsplash.com/1/?urban"/> */}
                <div className="post-text-container">
                    <div className="post-header"> 
                        <h4>{this.props.title}</h4>
                        <p className="post-author">{this.props.author}</p>
                    </div>
                    <div className="post-text-body-container"> 
                        <div>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                    <div className="post-footer-container">
                        <span> <p>{this.props.lastUpdatedDays} days ago | <i className="fa fa-comment"></i> {this.props.commentCount} Comments</p></span>
                    </div>

                </div>
                
                
            </div>
        )
    }
}

export default Post;