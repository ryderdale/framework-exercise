import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        console.log('Header props are:', props);
    }

    render() {
        return (
            <header className="header">
                <h3 className="siteTitle">Reddit Clone</h3>
            </header>
        )
    }
}

export default Header;