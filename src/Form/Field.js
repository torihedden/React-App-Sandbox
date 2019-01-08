import React, {Component} from 'react';

class FormField extends Component {

    render() {
        const { type, name, required, label } = this.props;
        
        return (
            <div>
                <label>{label}</label>
                <input 
                    type={type}
                    name={name}
                    required={required}>
                </input>
            </div>
        )
    }
}

export default FormField;