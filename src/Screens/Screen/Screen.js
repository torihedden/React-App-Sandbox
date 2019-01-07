import React, { Component } from 'react';
import FormField from '../../Form/Field';
import FormButton from '../../Form/Button';

class Screen extends Component {

    state = {
        formData: null
    }

    render() {

        const { currentScreen: screenIndex, screens, next } = this.props;
        const currentScreen = screens[screenIndex];        

        return (
            <div>
                <h1>{currentScreen.title}</h1>
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
                </form>

            </div>
        ) 
    }
};

export default Screen;
