import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

const style = {
    position: 'fixed',
    background: 'black',
    textAlign: 'center',
    fontSize: '30px'
}

class Header extends Component {
    render() {
        return(
            <div>
                <AppBar
                    title="Task Manager Pro"
                    showMenuIconButton={false}
                    className="app-header"
                    style={style}
                />
            </div>
        );
    }
}

export default Header;