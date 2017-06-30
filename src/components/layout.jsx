import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

class Layout extends Component {
    render() {
        return(
            <div>
                <AppBar
                    title="Goal Manager"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
            </div>
        );
    }
}

export default Layout;