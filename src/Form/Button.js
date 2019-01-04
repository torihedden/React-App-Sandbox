import React, {Component} from 'react';

class FormButton extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.click}>
                {this.props.text}</button>
            </div>
        )
    }
}

export default FormButton;
