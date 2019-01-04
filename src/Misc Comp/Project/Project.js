import React, {Component} from 'react';
import './Project.css'

class Project extends Component {
    render() {

        const hasStatus = this.props.status;
        let status;

        if (hasStatus === 'active') {
            status = <div>App is active</div>
        } else if (hasStatus === 'inactive') {
            status = <div>Inactive</div>
        } else {
            status = <div className='grayed-out'>No status data available</div>
        }

        return (
            <div className='project'>
                <div className='project-name'>{this.props.name}</div>
                {status}
                <button onClick={this.props.click}>Delete</button>
            </div>
     
        );
    }
}

export default Project;