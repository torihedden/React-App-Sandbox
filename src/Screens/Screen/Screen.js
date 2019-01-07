import React, { Component } from 'react';
import FormField from '../../Form/Field';
import FormButton from '../../Form/Button';

class Screen extends Component {

    state = {
        userName: '',
        email: ''
    }
 
    inputChangedHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state));
        return event;
    };

    render() {
        // const { currentScreen: screenIndex, screens, next } = this.props;
        // const currentScreen = screens[screenIndex];        

        return (
            <div>
                <form>
                    <div>
                        User name:
                        <input 
                            onChange={this.inputChangedHandler}
                            type="text"
                            // utilize the state value as the value of
                            // the input element to never be out of sync with state
                            value={this.state.userName}
                            name="userName"
                            maxLength="5"
                            required />
                    </div>
                    <div>
                        Email:
                        <input
                            onChange={this.inputChangedHandler}
                            type="email"
                            name="email"
                            required />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
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
