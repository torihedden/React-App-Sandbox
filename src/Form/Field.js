import React, {Component} from 'react';

class FormField extends Component {
    render() {
        return (
            <div>
                <input 
                    type={this.props.type}
                    maxLength={this.props.max}
                    required={this.props.required}>
                </input>
                <label>{this.props.label}</label>
            </div>
        )
    }
}

export default FormField;