import React, { Component } from 'react';
import FormField from '../../Form/Field';
import FormButton from '../../Form/Button';

class Screen extends Component {

    state = {
        formData: {
            userName: '',
            email: ''
        }
    }
 
    inputChangedHandler = (event) => {
        this.setState({
            formData: {userName: event.target.value}
        }, () => console.log(this.state));
        return event;
    };

    render() {
        // const { currentScreen: screenIndex, screens, next } = this.props;
        // const currentScreen = screens[screenIndex];        

        return (
            <div>
                <form>
                    User name:
                    <input 
                        onChange={this.inputChangedHandler}
                        type="text"
                        // utilize the state value as the value of the input element to never be out of sync with state
                        value={this.state.formData.userName}
                        required />
                    Email:
                    <input type="email" required />
                    <input type="submit" />
                </form>

                {/* <h1>{currentScreen.title}</h1>
                <p>{currentScreen.contents}</p>

                <form>
                    {currentScreen.fields.map(field => {
                        return <FormField 
                            key={field.name} 
                            type={field.type}
                            max={field.maxLength}
                            label={field.label}
                            required={field.isRequired}/>;
                    })}

                    <FormButton
                        click={next}
                        text={currentScreen.button.text}
                        disabled={!currentScreen.valid}
                    />
                </form> */}
            </div>
        ) 
    }
};

export default Screen;
