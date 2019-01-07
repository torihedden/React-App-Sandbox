import React, { Component } from 'react';

 class createTask extends Component {
    state = {
        title: '',
        description: '',
        userID: ''
    }

    inputChangedHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {

        const { title, description, userID } = this.state;

        return <div>
            <h4>Create New Task</h4>
            <form>
                <label>Task Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    name="title"
                    onChange={this.inputChangedHandler}/>
                <br />

                <label>Task Description</label>
                <input 
                    type="text"
                    required
                    value={description}
                    name="description"
                    onChange={this.inputChangedHandler}/>
                <br />

                <label>User ID</label>
                <input 
                    type="text"
                    required
                    value={userID}
                    name="userID"
                    onChange={this.inputChangedHandler}/>
                <br />

                <input type="submit"/>
            </form>
        </div>;
    }
    
}

export default createTask;