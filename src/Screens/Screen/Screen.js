import React, { Component } from 'react';
import FormField from '../../Form/Field';
import FormButton from '../../Form/Button';

class Screen extends Component {

    render() {

        const { currentScreen: screenIndex, screens, next } = this.props;
        const currentScreen = screens[screenIndex];        

        return (
            <div>
                <h1>{currentScreen.title}</h1>
                <p>{currentScreen.contents}</p>

                {currentScreen.fields.map(field => {
                    return <FormField 
                        key={field.name} 
                        type={field.type}
                        max={field.maxLength}
                        label={field.label}/>;
                })}

                <FormButton
                    click={next}
                    text={currentScreen.button.text}/>

            </div>
        ) 
    }
};

export default Screen;
