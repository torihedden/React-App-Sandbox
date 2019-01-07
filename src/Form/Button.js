import React, {Component} from 'react';

class FormButton extends Component {
    render() {

        const { click, disabled, text } = this.props;

        return (
            <div>
                <button
                    onClick={click}
                    disabled={disabled}>
                {text}</button>
            </div>
        )
    }
}

export default FormButton;
