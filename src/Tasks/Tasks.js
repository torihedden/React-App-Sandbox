import React, {Component} from 'react';
import axios from 'axios';
import Task from '../Tasks/Task';
import CreateTask from '../Tasks/CreateTask';

const todosUrl = 'https://jsonplaceholder.typicode.com/todos/';

class Tasks extends Component {

    state = {
        loading: false,
        error: false,
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
            .catch((error) => {
                this.setState({error: true});
                this.setState({loading: false});
                console.log(error);
            })
    }

    setPage (page, action, max, per) {
        switch (action) {
            case 'prev':
                this.setState({page: page - 1});
                break;
            case 'next':
                this.setState({page: page + 1});
                break;
            case 'last':
                this.setState({page: (max / per) - 1 })
                break;
            default: this.setState({page: page});
        }
    }

    render() {

        const { loading, error, tasks, page } = this.state;
        const maxNumPages = tasks.length;
        const numPerPage = 10;
        const allTasks = tasks.map(task => {
            return <Task key={task.id} title={task.title} />
        });
        const shownTasks = allTasks.slice(page * numPerPage, (page + 1) * numPerPage);
    
        return <div>
            {loading ? <h3>Loading...</h3> : 
                !error ? shownTasks : <h3>Unable to fetch tasks at this time.</h3>
            }

            <button
                disabled={page === 0 ? true : false}
                onClick={() => this.setPage(0)}>
                &lt;&lt; First
            </button>
            
            {page === 0 ? null : 
                <button 
                    onClick={() => this.setPage(page, 'prev')}>
                &lt;  Page {page}</button>
            }
            
            <span> Page {page + 1} </span>
            
            {page === (maxNumPages / numPerPage) - 1 ? null :
                <button
                    disabled={page === (maxNumPages / numPerPage) - 1 ? true : false}
                    onClick={() => this.setPage(page, 'next')}>
                    Page {page + 2} &gt;
                </button>
            }
            
            <button
                disabled={page === (maxNumPages / numPerPage) - 1 ? true : false}
                onClick={() => this.setPage(page, 'last', maxNumPages, numPerPage)}>
                Last &gt;&gt;
            </button>
            
            <CreateTask />
        </div>;
    }
}

export default Tasks;