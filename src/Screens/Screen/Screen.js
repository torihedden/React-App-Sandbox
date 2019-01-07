import React, { Component } from 'react';
import FormField from '../../Form/Field';
import FormButton from '../../Form/Button';
import Task from '../../Tasks/Task';
import axios from 'axios';

const todosUrl = 'https://jsonplaceholder.typicode.com/todos/';

class Screen extends Component {

    state = {
        loading: false,
        formData: {
            userName: '',
            email: ''
        },
        tasks: [],
        page: 0
    }

    componentDidMount() {
        this.setState({loading: true});
        axios.get(todosUrl)
            .then(response => {
                this.setState({tasks: response.data}, () => console.log(this.state));
                this.setState({loading: false});
            })
    }

    inputChangedHandler = (event) => {
        this.setState({
            formData: {userName: event.target.value.trim()}
        }, () => console.log(this.state));
        return event;
    };

    render() {
        // const { currentScreen: screenIndex, screens, next } = this.props;
        // const currentScreen = screens[screenIndex];        

        const { page, loading } = this.state;
        const tasks = this.state.tasks.map(task => {
            return <Task key={task.id} title={task.title} />
        });
        const shownTasks = tasks.slice(page * 10, (page + 1) * 10);

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

                {loading ? <h3>Loading...</h3> : shownTasks}

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
