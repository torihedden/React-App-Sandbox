import React, {Component} from 'react';

// const header = (props) => {
//     return <h1>Hello, {props.name}</h1>;
// }

class Header extends Component {
    // userName = () => {
    //     return this.props.name || 'User';
    // }
    render() {
        // return <h1>Hello, {this.userName()}</h1>

        // destructure the name attribute passed in to props
        const {name = 'User'} = this.props;

        return <h1>Hello, {name}</h1>
    }
}

export default Header;
