import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import '../assets/stylesheets/header.css';

class Header extends Component {
    render() {
        return(
            <div>
                <AppBar
                    title="Goal Manager"
                    showMenuIconButton={false}
                    className="app-header"
                />
            </div>
        );
    }
}

export default Header;